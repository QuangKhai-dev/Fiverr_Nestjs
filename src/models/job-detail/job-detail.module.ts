import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JobDetailService } from './job-detail.service';
import { JobDetailController } from './job-detail.controller';
import { JobDetailEntity } from './entities/job-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobDetailEntity])],
  controllers: [JobDetailController],
  providers: [JobDetailService],
})
export class JobDetailModule {}
