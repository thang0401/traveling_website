import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('tours')
export class Tour {
  // this decorator will help you to auto generate id for the table .
  @PrimaryColumn('integer')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'numeric' })
  price: number;

  @Column({ type: 'varchar', length: 255 })
  image: string;

  @Column({ type: 'varchar', length: 50 })
  category: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'integer' })
  rate: number;

  @Column({ type: 'varchar', length: 10 })
  amountoftime: string;
}
