import { Module } from '@nestjs/common';
import { DifferentExampleService } from './differentExample.service';
import { DifferentExampleController } from './differentExample.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DifferentExampleTable } from './differentExample.entity';
import { ExampleModule } from 'Examplepackage';
import dbConfiguration from 'src/config/database.config';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([DifferentExampleTable]),
    ExampleModule.forFeature(
      [DifferentExampleTable],
      new DataSource(dbConfiguration()),
    ),
  ],
  providers: [DifferentExampleService],
  controllers: [DifferentExampleController],
})
export class differentExampleModule {}
