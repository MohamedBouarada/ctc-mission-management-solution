import { Timestamp } from "src/generics/timestamp.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Instructor extends Timestamp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cv : string ;

    @Column()
    startDate : Date ;

    @Column()
    endDate : Date ;

    @OneToOne(() => User, (user) => user.instructor, {
        eager: true,
    })
    @JoinColumn()
    user: User;
}
