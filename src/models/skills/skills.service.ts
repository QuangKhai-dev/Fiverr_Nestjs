import { templateRespone } from 'src/util/exampleRespone';
import { SkillEntity } from 'src/models/skills/entities/skill.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Injectable,
  HttpException,
  HttpStatus,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { SkillDto, UpdateSkillDto } from './dto/skill.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(SkillEntity)
    private readonly skillEntity: Repository<SkillEntity>,
  ) {}

  async create(createSkillDto: SkillDto) {
    try {
      await this.skillEntity.save(createSkillDto);
      return templateRespone(HttpStatus.CREATED, 'Xử lí thành công', null);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const allSkill = await this.skillEntity.find();
      return templateRespone(HttpStatus.OK, 'Xử lí thành công', allSkill);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    const skill = await this.skillEntity.findOne({
      where: {
        id,
      },
    });
    if (!skill) {
      throw new HttpException('Skill not found', HttpStatus.NOT_FOUND);
    }
    return templateRespone(HttpStatus.OK, 'Xử lí thành công', skill);
  }

  async update(id: number, updateSkillDto: UpdateSkillDto) {
    try {
      const skill = await this.skillEntity.findOne({
        where: {
          id,
        },
      });
      if (!skill) {
        throw new HttpException('Skill not found', HttpStatus.NOT_FOUND);
      }
      await this.skillEntity.update(id, updateSkillDto);
      return templateRespone(HttpStatus.OK, 'Xử lí thành công', null);
    } catch (error) {
      throw new HttpException('error', HttpStatus.BAD_REQUEST, {
        cause: new Error(error),
      });
    }
  }

  async remove(id: number) {
    const skill = await this.skillEntity.findOne({
      where: {
        id,
      },
    });
    if (!skill) {
      throw new HttpException('Skill not found', HttpStatus.NOT_FOUND);
    }
    await this.skillEntity.delete(id);
    return templateRespone(HttpStatus.OK, 'Xử lí thành công', null);
  }
}
