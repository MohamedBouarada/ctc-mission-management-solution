import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { OrganismModule } from './organism/organism.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstructorModule } from './instructor/instructor.module';

@Module({
  imports: [CoursesModule,UserModule, AuthModule, TypeOrmModule.forRoot(typeOrmConfig), OrganismModule, InstructorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
