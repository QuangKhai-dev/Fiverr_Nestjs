import { templateRespone } from 'src/util/exampleRespone';
import { JobEntity } from 'src/models/jobs/entities/job.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Injectable,
  BadRequestException,
  HttpStatus,
  ForbiddenException,
} from '@nestjs/common';
import { CreateCommentDto, UpdateCommentDto } from './dto/create-comment.dto';
import { CommentEntity } from './entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentsRepository: Repository<CommentEntity>,
    @InjectRepository(JobEntity)
    private jobsRepository: Repository<JobEntity>,
  ) {}

  async create(
    createCommentDto: CreateCommentDto,
    user: { userId: number; email: string },
  ) {
    const job = await this.jobsRepository.findOne({
      where: { id: createCommentDto.jobId },
    });
    if (!job) {
      throw new BadRequestException('Job not found');
    }
    const comment = new CommentEntity();
    comment.userId = user.userId;
    comment.content = createCommentDto.content;
    comment.jobId = createCommentDto.jobId;
    return await this.commentsRepository.save(comment);
  }

  async findAll() {
    const comments = await this.commentsRepository.find();
    return templateRespone(HttpStatus.CREATED, 'Get all comments', comments);
  }

  async findByJob(id: number) {
    const comments = await this.commentsRepository.find({
      where: {
        jobId: id,
      },
    });
    if (comments.length === 0) {
      throw new BadRequestException('Comment not found');
    }
    return templateRespone(HttpStatus.CREATED, 'Get all comments', comments);
  }

  async update(
    id: number,
    updateCommentDto: UpdateCommentDto,
    user: { userId: number; email: string },
  ) {
    const comment = await this.commentsRepository.findOne({
      where: { id: id },
    });
    if (!comment) {
      throw new BadRequestException('Comment not found');
    }
    if (comment.userId !== user.userId) {
      throw new ForbiddenException('You are not the owner of this comment');
    }
    comment.content = updateCommentDto.content;
    await this.commentsRepository.save(comment);
    return templateRespone(HttpStatus.OK, 'Update comment successfully', {});
  }

  async remove(id: number, user: { userId: number; email: string }) {
    const comment = await this.commentsRepository.findOne({
      where: { id: id },
    });
    if (!comment) {
      throw new BadRequestException('Comment not found');
    }
    if (comment.userId !== user.userId) {
      throw new ForbiddenException('You are not the owner of this comment');
    }
    await this.commentsRepository.delete(id);
    return templateRespone(HttpStatus.OK, 'Delete comment successfully', {});
  }
}
