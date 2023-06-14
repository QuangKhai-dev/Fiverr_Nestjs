import { JobEntity } from 'src/models/jobs/entities/job.entity';
import { CommentEntity } from './entities/comment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, JobEntity])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
