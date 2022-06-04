import { Module } from '@nestjs/common';
import { OrganismModule } from 'src/organism/organism.module';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MailModule } from "../mail/mail.module";

@Module({
  imports: [UserModule,OrganismModule,MailModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
