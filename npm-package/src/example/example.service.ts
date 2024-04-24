import { InjectRepository } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';
import { ExampleTable } from './example.entity';

export class ExampleService<T extends ObjectLiteral> {
  @InjectRepository(ExampleTable) private exampleRepo: Repository<ExampleTable>;

  private tempTemp: Repository<T>;

  constructor() {}

  public setRepo(repo: Repository<T>) {
    this.tempTemp = repo;
  }

  public async doeQueryEen() {
    return await this.tempTemp.find();
  }

  public async doeQueryTwee() {
    return await this.exampleRepo.find();
  }
}
