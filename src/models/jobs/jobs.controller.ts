import { JobDto, UpdateJobDto } from './dto/job.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
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
  ParseIntPipe,
  Put,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { User } from 'src/decorators/user.decorator';
import { Public } from 'src/decorators/jwt.decorator';
import { storageMulter } from 'src/util/storageMulter';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('jobs')
@ApiTags('Jobs-Done')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @ApiBearerAuth()
  async create(
    @Body() dto: JobDto,
    @User() user: { userId: number; email: string },
  ) {
    return this.jobsService.create(dto, user);
  }

  @Get()
  @Public()
  findAll() {
    return this.jobsService.findAll();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.jobsService.findOne(id);
  }

  @Put(':id')
  @ApiBearerAuth()
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateJobDto: UpdateJobDto,
    @User() user: { userId: number; email: string },
  ) {
    return this.jobsService.update(id, updateJobDto, user);
  }

  @Delete(':id')
  @ApiBearerAuth()
  remove(
    @Param('id', ParseIntPipe) id: number,
    @User() user: { userId: number; email: string },
  ) {
    return this.jobsService.remove(id, user);
  }

  @Post('uploads-images')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Upsert Images Job' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'files', maxCount: 3 }], storageMulter),
  )
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
        jobId: {
          type: 'number',
        },
      },
    },
  })
  async uploadImages(
    @UploadedFiles() files: any,
    @User() user: { userId: number; email: string },
    @Body('jobId', new ParseIntPipe()) jobId: number,
  ) {
    console.log(jobId);
    return this.jobsService.uploadImages(jobId, files);
  }
}
