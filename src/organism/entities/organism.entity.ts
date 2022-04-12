import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrganismNautreEnum } from "../enums/organism-nature.enum";

@Entity()
export class Organism {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        unique:true
    })
    name:string;

    @Column({})
    activity:string;

    @Column({})
    taxRegistrationNumber:string;

    @Column({})
    contactPersonPosition:string;

    @Column({
        type:'enum',
        enum: OrganismNautreEnum
    })
    nature:OrganismNautreEnum;

    @Column({
        nullable:true
    })
    numberOfEmplyees:number;

    @Column({
        nullable:true
    })
    subsidiary:string;

    @Column({
        nullable:true
    })
    trainingNeeds:string;

    @OneToOne(type=>User,user=>user.organism,{
        eager:true,
    })
    contactPerson:User;
    
}
