import { SkillEntity } from 'src/models/skills/entities/skill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SkillEntity])],
  controllers: [SkillsController],
  providers: [SkillsService, JwtService],
})
export class SkillsModule {}
