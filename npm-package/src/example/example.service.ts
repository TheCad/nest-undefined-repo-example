import { InjectRepository } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';
import { ExampleTable } from './example.entity';

export class ExampleService<T extends ObjectLiteral> {
  @InjectRepository(ExampleTable) exampleRepo: Repository<ExampleTable>;

  constructor(private repo: Repository<T>) {}

  public async exampleWorking(): Promise<void> {
    console.log('working');
    console.log(this.repo);
    // console.log(await this.repo.find());
  }

  public async exampleFailing(): Promise<void> {
    console.log('failing');
    console.log(this.exampleRepo);
    // console.log(await this.exampleRepo.find());
  }
}
