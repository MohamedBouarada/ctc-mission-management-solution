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
import { EnrollmentModule } from './enrollment/enrollment.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [InstructorModule,CoursesModule,UserModule, AuthModule, TypeOrmModule.forRoot(typeOrmConfig), OrganismModule, EnrollmentModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
