import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('users')
export class User {
  // this decorator will help you to auto generate id for the table .
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'varchar', length: 50 })
  password: string;

  @Column({ type: 'varchar', length: 50 })
  gender: string;

  @Column({ type: 'varchar', length: 50 })
  country: string;
}
