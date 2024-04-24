import { InjectRepository } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';
import { ExampleTable } from './example.entity';
import { ModuleRef } from '@nestjs/core';
import { Inject } from '@nestjs/common';

export class ExampleService<T extends ObjectLiteral> {
  @InjectRepository(ExampleTable) private exampleRepo: Repository<ExampleTable>;
  @Inject('ExampleTableRepository')
  private exampleTableRepo: Repository<ExampleTable>;
  @Inject() private moduleRef: ModuleRef;
  @Inject('ModuleRef') private moduleRef2: ModuleRef;

  constructor(private repo: Repository<T>) {}

  public async exampleWorking(): Promise<void> {
    console.log('working');
    console.log(this.repo);
    // console.log(await this.repo.find());
  }

  public async exampleFailing(): Promise<void> {
    console.log('failing');
    console.log(this.exampleRepo);
    console.log(this.exampleTableRepo);
    console.log(this.moduleRef2);
    console.log(this.moduleRef);
    let x;
    if (typeof this.moduleRef2 != 'undefined') {
      x = this.moduleRef2.get(Repository<ExampleTable>);
    }
    if (typeof this.moduleRef != 'undefined') {
      x = this.moduleRef.get(Repository<ExampleTable>);
    }
    console.log(x);
  }
}
