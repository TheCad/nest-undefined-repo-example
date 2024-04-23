import { Controller, Get, Inject } from '@nestjs/common';
import { DifferentExampleTable } from './differentExample.entity';
import { ExampleService } from 'Examplepackage';
import { Repository } from 'typeorm';
import { DiscoveryService } from '@nestjs/core';

@Controller('example')
export class DifferentExampleController {
  private readonly differentExampleService: ExampleService<DifferentExampleTable>;
  constructor(
    @Inject('DifferentExampleTableRepository')
    private differentExampleRepo: Repository<DifferentExampleTable>,
    private discoveryService: DiscoveryService,
  ) {
    this.differentExampleService = new ExampleService<DifferentExampleTable>(
      this.differentExampleRepo,
    );
  }

  @Get('/')
  async main() {
    this.discoveryService.getProviders().forEach((prov) => {
      if (prov.name.includes('Example')) {
        console.log(prov);
      }
    });

    this.differentExampleService.exampleWorking();
    this.differentExampleService.exampleFailing();
  }
}
