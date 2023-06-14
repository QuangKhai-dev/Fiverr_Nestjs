import { templateRespone } from 'src/util/exampleRespone';
import { JobDto, UpdateJobDto } from './dto/job.dto';
import { JobEntity } from './entities/job.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Injectable,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { JobImageEntity } from '../job-images/entities/job-image.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(JobEntity)
    private readonly jobRepository: Repository<JobEntity>,
    @InjectRepository(JobImageEntity)
    private readonly imagesJobRepository: Repository<JobImageEntity>,
  ) {}

  async checkAuthAndEmptyJob(id: number, userId: number) {
    const job = await this.jobRepository.findOne({
      where: {
        id,
      },
    });
    console.log(job);
    if (!job) {
      return templateRespone(HttpStatus.NOT_FOUND, 'Not found any job', null);
    }
    if (job.userId !== userId) {
      return templateRespone(
        HttpStatus.UNAUTHORIZED,
        'You are not authorized to update this job',
        null,
      );
    }
    return true;
  }

  async create(createJobDto: JobDto, user: { userId: number; email: string }) {
    // get id user from token authorization
    try {
      const { userId } = user;
      const job = await this.jobRepository.save({
        ...createJobDto,
        userId,
      });
      return templateRespone(
        HttpStatus.CREATED,
        'Create job successfully',
        job,
      );
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async findAll() {
    try {
      const jobs = await this.jobRepository.find();
      if (jobs) {
        return templateRespone(
          HttpStatus.OK,
          'Get all jobs successfully',
          jobs,
        );
      } else {
        return templateRespone(
          HttpStatus.NOT_FOUND,
          'Not found any jobs',
          null,
        );
      }
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async findOne(id: number) {
    try {
      const job = await this.jobRepository.findOne({
        where: {
          id,
        },
      });
      if (!job) {
        return templateRespone(HttpStatus.NOT_FOUND, 'Not found any job', null);
      }
      return templateRespone(HttpStatus.OK, 'Get job successfully', job);
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async update(
    id: number,
    updateJobDto: UpdateJobDto,
    user: { userId: number; email: string },
  ) {
    const checkCreatedJob = await this.jobRepository.findOne({
      where: {
        id,
      },
    });
    console.log(checkCreatedJob);
    if (!checkCreatedJob) {
      throw new HttpException('not found job', HttpStatus.NOT_FOUND);
    }
    if (checkCreatedJob.userId !== user.userId) {
      throw new HttpException(
        "you don't have permission to update",
        HttpStatus.UNAUTHORIZED,
      );
    }
    await this.jobRepository.update(id, updateJobDto);
    return templateRespone(HttpStatus.OK, 'Update job successfully', {});
  }

  async remove(id: number, user: { userId: number; email: string }) {
    const checkCreatedJob = await this.jobRepository.findOne({
      where: {
        id,
      },
    });
    if (!checkCreatedJob) {
      throw new HttpException('not found job', HttpStatus.NOT_FOUND);
    }
    if (checkCreatedJob.userId !== user.userId) {
      throw new HttpException(
        "you don't have permission to update",
        HttpStatus.UNAUTHORIZED,
      );
    }
    await this.jobRepository.delete(id);
    return templateRespone(HttpStatus.OK, 'Delete job successfully', {});
  }

  async uploadImages(id: number, files: any) {
    console.log(id);
    //find job
    const job = await this.jobRepository.findOne({
      where: {
        id,
      },
    });
    if (!job) {
      throw new BadRequestException('not found job');
    }
    for (const key in files.files) {
      const file = files.files[key];
      const image = await this.imagesJobRepository.save({
        jobId: id,
        link: file.filename,
      });
    }
  }
}
