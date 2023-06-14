import {
  ApiBearerAuth,
  ApiBody,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillDto, UpdateSkillDto } from './dto/skill.dto';
import { Role } from 'src/common/enums/role.enum';
import { Roles } from 'src/decorators/role.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { Public } from 'src/decorators/jwt.decorator';

@Controller('skills')
@ApiTags('Skills-Done')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles(Role.Admin, Role.SuperAdmin)
  @ApiBearerAuth()
  create(@Body() createSkillDto: SkillDto) {
    return this.skillsService.create(createSkillDto);
  }

  @Get()
  @Public()
  @ApiBearerAuth()
  findAll() {
    return this.skillsService.findAll();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.skillsService.findOne(id);
  }

  @Put(':id')
  @Public()
  @ApiBody({
    type: UpdateSkillDto,
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSkillDto: UpdateSkillDto,
  ) {
    return this.skillsService.update(id, updateSkillDto);
  }

  @Delete(':id')
  @Public()
  remove(@Param('id') id: string) {
    return this.skillsService.remove(+id);
  }
}
