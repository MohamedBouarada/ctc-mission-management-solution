import { Course } from "src/courses/entities/course.entity";
import { timeStamp } from "src/shared/time-stamp";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { statesEnum } from "../enums/states.enum";
import { userTypesEnum } from "../enums/user-types.enum";

@Entity()
export class Enrollment extends timeStamp{

    @PrimaryGeneratedColumn('increment')
    id:number;
    @JoinColumn()
    @ManyToOne(type=>User,{         //options to review
       eager:true,
       cascade:['update','insert'],
       nullable:true
    })
    user:User;
    @JoinColumn()
    @ManyToOne(type=>Course,{         //options to review
       eager:true,
       cascade:['update','insert'],
       nullable:true
    })
    course:Course;
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
      userType:userTypesEnum;
    @Column({default : 1})
    size: number;
    @Column('json',{nullable: true})
    extraInformations:{fullName :string, email: string}[];

}
