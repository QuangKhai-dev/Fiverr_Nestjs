import { SkillsSeederService } from './skills.service';
import { SkillEntity } from './../../../models/skills/entities/skill.entity';
import { UserEntity } from 'src/models/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, SkillEntity])],
  providers: [SkillsSeederService],
  exports: [SkillsSeederService],
})
export class SkillsSeederModule {}
