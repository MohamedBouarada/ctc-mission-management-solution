import { Course } from "src/courses/entities/course.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { statesEnum } from "../enums/states.enum";
import { userTypesEnum } from "../enums/user-types.enum";

@Entity()
export class Enrollment {

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
    @Column()
    size: number;
    @Column()
    extraInformations:string;

}
