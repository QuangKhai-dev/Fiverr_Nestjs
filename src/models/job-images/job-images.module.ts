import { JobEntity } from 'src/models/jobs/entities/job.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JobImagesService } from './job-images.service';
import { JobImagesController } from './job-images.controller';
import { JobImageEntity } from './entities/job-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobImageEntity, JobEntity])],
  controllers: [JobImagesController],
  providers: [JobImagesService],
})
export class JobImagesModule {}
