import { IsEmail, MinLength } from 'class-validator';
import { Timestamp } from 'src/generics/timestamp.entity';
import { Instructor } from 'src/instructor/entities/instructor.entity';
import { Organism } from 'src/organism/entities/organism.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RolesEnum } from '../enums/roles.enum';

@Entity()
export class User extends Timestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
    length: 8,
  })
  cin: string;

  @Column({
    unique: true,
  })
  @IsEmail()
  email: string;

  @Column({
    unique: true,
  })
  phoneNumber: string;

  @Column({
    type: 'enum',
    enum: RolesEnum,
    default: RolesEnum.INDIVIDUAL,
  })
  role: RolesEnum; // should be an array but mysql does not support it!!

  @Column()
  @MinLength(8)
  password: string;

  @OneToOne(() => Organism, (organism) => organism.contactPerson)
  organism: Organism;

  @OneToOne(() => Instructor, (organism) => organism.user)
  instructor: Instructor;
}
