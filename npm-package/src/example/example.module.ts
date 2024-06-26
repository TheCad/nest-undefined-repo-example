import { DynamicModule, Module } from '@nestjs/common';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { DataSource, DataSourceOptions } from 'typeorm';
import { createExampleProviders } from './example.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleTable } from './example.entity';
import { ExampleService } from './example.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExampleTable])],
  exports: [TypeOrmModule],
  providers: [TypeOrmModule, ExampleService],
})
export class ExampleModule {
  static forFeature(
    entities: EntityClassOrSchema[],
    dataSource: DataSource | DataSourceOptions | 'default',
  ): DynamicModule {
    const providers = createExampleProviders(entities, dataSource);
    return {
      imports: [TypeOrmModule.forFeature(entities)],
      module: ExampleModule,
      providers: [...providers, ExampleService],
      exports: [...providers, ExampleService],
    };
  }
}
