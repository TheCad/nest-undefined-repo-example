import { Module } from '@nestjs/common';
import { differentExampleModule } from './example/differentExample.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import dbConfiguration from './config/database.config';
import { ExampleModule } from 'Examplepackage';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    differentExampleModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfiguration],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        ...configService.get('database'),
      }),
    }),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'prodction',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
