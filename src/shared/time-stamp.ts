import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export class timeStamp{
    @CreateDateColumn({update:false})
    CreatedAt:Date;
    @UpdateDateColumn()
    UpdatedAt:Date;
    @DeleteDateColumn()
    DeletedAt:Date;
}
