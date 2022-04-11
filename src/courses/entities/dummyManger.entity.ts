import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class dummyManager {
    @PrimaryGeneratedColumn('increment')
     Id: number;
    @Column()
     userName: string;

}