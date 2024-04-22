import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('different_table')
export class DifferentExampleTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @Column()
  country: string;
}
