import { timeStamp } from "src/shared/time-stamp";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { dummyInstructor} from "./dummyInstructor.entity";
import { dummyManager } from "./dummyManger.entity";

@Entity()
export class Course extends timeStamp {
    @PrimaryGeneratedColumn('increment')
     Id: number;
    @Column()
     Name: string;
    @Column()
     Date: string;
    @Column()
     Adresse: string;
    @Column()
     Description: string;
    @Column({ type:'decimal', precision: 10, scale: 2 })    
     Price: number;
    @Column()
     Capacity: number;
    @JoinColumn()
    @ManyToOne(type=>dummyInstructor,{         //options to review
       eager:true,
       cascade:['update','insert'],
       nullable:true
    })
    InstructedBy:dummyInstructor
    @JoinColumn()
    @ManyToOne(type=>dummyManager,{       //options to review
        eager:true,
        cascade:['update','insert'],
        nullable:true
     })
     PlannifiedBy:dummyManager

 
}
