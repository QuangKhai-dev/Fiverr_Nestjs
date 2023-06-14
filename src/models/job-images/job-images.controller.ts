import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JobImagesService } from './job-images.service';
import { CreateJobImageDto } from './dto/create-job-image.dto';
import { UpdateJobImageDto } from './dto/update-job-image.dto';

@Controller('job-images')
export class JobImagesController {
  constructor(private readonly jobImagesService: JobImagesService) {}

  @Post()
  create(@Body() createJobImageDto: CreateJobImageDto) {
    return this.jobImagesService.create(createJobImageDto);
  }

  @Get()
  findAll() {
    return this.jobImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobImagesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateJobImageDto: UpdateJobImageDto,
  ) {
    return this.jobImagesService.update(+id, updateJobImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobImagesService.remove(+id);
  }
}
