import { UserEntity } from 'src/models/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { JobEntity } from './entities/job.entity';
import { JobImageEntity } from '../job-images/entities/job-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobEntity, UserEntity, JobImageEntity])],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
