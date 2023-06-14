import { templateRespone } from 'src/util/exampleRespone';
import {
  Injectable,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import {
  CreateCategorySkillDto,
  UpdateCategorySkillDto,
} from './dto/create-category-skill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategorySkillEntity } from './entities/category-skill.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategorySkillsService {
  constructor(
    @InjectRepository(CategorySkillEntity)
    private categorySkillRepository: Repository<CategorySkillEntity>,
  ) {}
  async create(createCategorySkillDto: CreateCategorySkillDto) {
    //check duplicate name
    const checkCategory = await this.categorySkillRepository.findOne({
      where: { name: createCategorySkillDto.name },
    });
    if (checkCategory) {
      throw new HttpException('Category is exsited', HttpStatus.BAD_REQUEST);
    }
    try {
      const category = await this.categorySkillRepository.save(
        createCategorySkillDto,
      );
      return templateRespone(HttpStatus.CREATED, 'Xử lí thành công', category);
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    const categorySkills = await this.categorySkillRepository.find();
    return templateRespone(HttpStatus.OK, 'Xử lí thành công', categorySkills);
  }

  async findOne(id: number) {
    const categorySkill = await this.categorySkillRepository.findOne({
      where: { id },
    });
    if (!categorySkill) {
      throw new BadRequestException('Not found');
    }
    return templateRespone(HttpStatus.OK, 'Xử lí thành công', categorySkill);
  }

  update(id: number, updateCategorySkillDto: UpdateCategorySkillDto) {
    return `This action updates a #${id} categorySkill`;
  }

  async remove(id: number) {
    const categorySkill = await this.categorySkillRepository.findOne({
      where: { id },
    });
    if (!categorySkill) {
      throw new BadRequestException('Not found');
    }
    await this.categorySkillRepository.delete(id);
    return templateRespone(HttpStatus.OK, 'Xử lí thành công', categorySkill);
  }
}
