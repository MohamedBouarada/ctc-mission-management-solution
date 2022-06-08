import { Timestamp } from 'src/generics/timestamp.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Instructor extends Timestamp {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  cv: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
  @Column({ type: 'text' })
  professionalImage: string;

  @OneToOne(() => User, (user) => user.instructor, {
    eager: true,
  })
  @JoinColumn()
  user: User;
}
