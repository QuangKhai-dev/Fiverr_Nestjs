import { ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CategorySkillsService } from './category-skills.service';
import {
  CreateCategorySkillDto,
  UpdateCategorySkillDto,
} from './dto/create-category-skill.dto';
import { Public } from 'src/decorators/jwt.decorator';
import { Roles } from 'src/decorators/role.decorator';
import { Role } from 'src/common/enums/role.enum';

@Controller('category-skills')
@ApiTags('Category Skills-Done')
export class CategorySkillsController {
  constructor(private readonly categorySkillsService: CategorySkillsService) {}

  @Post()
  create(@Body() createCategorySkillDto: CreateCategorySkillDto) {
    return this.categorySkillsService.create(createCategorySkillDto);
  }

  @Get()
  @Public()
  // @Roles(Role.Admin, Role.SuperAdmin)
  findAll() {
    return this.categorySkillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categorySkillsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategorySkillDto: UpdateCategorySkillDto,
  ) {
    return this.categorySkillsService.update(+id, updateCategorySkillDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.categorySkillsService.remove(id);
  }
}
