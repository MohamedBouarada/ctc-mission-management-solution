import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class dummyInstructor {
    @PrimaryGeneratedColumn('increment')
     Id: number;
    @Column()
     userName: string;
    

}