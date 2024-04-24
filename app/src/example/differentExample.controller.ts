import { Controller, Get, Inject } from '@nestjs/common';
import { DifferentExampleTable } from './differentExample.entity';
import { ExampleService } from 'Examplepackage';
import { Repository } from 'typeorm';

@Controller('example')
export class DifferentExampleController {
  constructor(
    @Inject('DifferentExampleTableRepository')
    private differentExampleRepo: Repository<DifferentExampleTable>,
    private diffExampServ: ExampleService<DifferentExampleTable>,
  ) {
    this.diffExampServ.setRepo(this.differentExampleRepo);
  }

  @Get('/')
  async main() {
    console.log(await this.diffExampServ.doeQueryEen());
    console.log(await this.diffExampServ.doeQueryTwee());
  }
}
