import { timeStamp } from "src/shared/time-stamp";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { dummyInstructor} from "./dummyInstructor.entity";
import { dummyManager } from "./dummyManger.entity";
import { Instructor } from "../../instructor/entities/instructor.entity";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Course extends timeStamp {
    @PrimaryGeneratedColumn('increment')
     id: number;
    @Column()
     name: string;
    @Column()
     startDate: Date;
    @Column()
    endDate :Date ;
    @Column()
     address: string;
    @Column()
     description: string;
    @Column({ type:'decimal', precision: 10, scale: 2 })    
     price: number;
    @Column()
     capacity: number;
    @JoinColumn()
    @ManyToOne(()=>Instructor,{         //options to review
       eager:true,
       cascade:['update','insert'],
       nullable:true
    })
    instructedBy:Instructor
    @JoinColumn()
    @ManyToOne(()=>dummyManager,{       //options to review
        eager:true,
        cascade:['update','insert'],
        nullable:true
     })
     plannedBy:User

 
}
