import { Course } from 'src/courses/entities/course.entity';
import { timeStamp } from 'src/shared/time-stamp';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { statesEnum } from '../enums/states.enum';
import { userTypesEnum } from '../enums/user-types.enum';

@Entity()
export class Enrollment extends timeStamp {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @JoinColumn()
  @ManyToOne(() => User, {
    // TODO: options to review
    eager: true,
   // cascade: ['insert'],
    onDelete: 'SET NULL',
  })
  user: User;
  @JoinColumn()
  @ManyToOne(() => Course, {
    // TODO: options to review
    eager: true,
    cascade: ['update', 'insert'],
    onDelete: 'SET NULL',
  })
  course: Course;
  @Column({
    type: 'enum',
    enum: statesEnum,
    default: statesEnum.inProgress,
  })
  state: statesEnum;
  @Column({
    type: 'enum',
    enum: userTypesEnum,
    default: userTypesEnum.individual,
  })
  userType: userTypesEnum;
  @Column({ default: 1 })
  size: number;
  @Column({ nullable: true })
  extraInformations: string;
}
