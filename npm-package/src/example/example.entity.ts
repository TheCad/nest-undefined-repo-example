import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('example_table')
export class ExampleTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
