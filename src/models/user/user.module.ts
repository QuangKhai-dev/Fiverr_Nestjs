import { JobImageEntity } from 'src/models/job-images/entities/job-image.entity';
import { CertificateEntity } from '../certificates/entities/certificate.entity';
import { SkillEntity } from '../skills/entities/skill.entity';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      SkillEntity,
      CertificateEntity,
      JobImageEntity,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
