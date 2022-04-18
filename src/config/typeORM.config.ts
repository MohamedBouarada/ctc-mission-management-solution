import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'ctc_mission',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,////dont to forget to change this when dev is done
}
