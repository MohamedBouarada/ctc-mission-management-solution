import { timeStamp } from "src/shared/time-stamp";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { dummyInstructor} from "./dummyInstructor.entity";
import { dummyManager } from "./dummyManger.entity";

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
    @ManyToOne(()=>dummyInstructor,{         //options to review
       eager:true,
       cascade:['update','insert'],
       nullable:true
    })
    instructedBy:dummyInstructor
    @JoinColumn()
    @ManyToOne(()=>dummyManager,{       //options to review
        eager:true,
        cascade:['update','insert'],
        nullable:true
     })
     plannedBy:dummyManager

 
}
