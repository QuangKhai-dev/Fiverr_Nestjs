import { SkillEntity } from './../../../models/skills/entities/skill.entity';
import { CertificateEntity } from './../../../models/certificates/entities/certificate.entity';
import { UsersSeederService } from './users.service';
import { UserEntity } from 'src/models/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, CertificateEntity, SkillEntity]),
  ],
  providers: [UsersSeederService],
  exports: [UsersSeederService],
})
export class UsersSeederModule {}
