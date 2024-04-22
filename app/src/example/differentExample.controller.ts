import { Controller, Get, Inject } from '@nestjs/common';
import { DifferentExampleTable } from './differentExample.entity';
import { ExampleService } from 'Examplepackage';
import { Repository } from 'typeorm';

@Controller('example')
export class DifferentExampleController {
  private readonly differentExampleService: ExampleService<DifferentExampleTable>;
  constructor(
    @Inject('DifferentExampleTableRepository')
    private differentExampleRepo: Repository<DifferentExampleTable>,
  ) {
    this.differentExampleService = new ExampleService<DifferentExampleTable>(
      differentExampleRepo,
    );
  }

  @Get('/')
  async main() {
    this.differentExampleService.exampleWorking();
    this.differentExampleService.exampleFailing();
  }
}
