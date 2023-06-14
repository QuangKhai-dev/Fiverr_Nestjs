import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
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
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/create-comment.dto';
import { User } from 'src/decorators/user.decorator';
import { Public } from 'src/decorators/jwt.decorator';

@Controller('comments')
@ApiTags('Comments-Done')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ApiBearerAuth()
  create(
    @Body() createCommentDto: CreateCommentDto,
    @User() user: { userId: number; email: string },
  ) {
    return this.commentsService.create(createCommentDto, user);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get('/find-by-job/:jobId')
  @Public()
  findOne(@Param('jobId', ParseIntPipe) id: number) {
    return this.commentsService.findByJob(id);
  }

  @Put(':id')
  @ApiBearerAuth()
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCommentDto: UpdateCommentDto,
    @User() user: { userId: number; email: string },
  ) {
    return this.commentsService.update(id, updateCommentDto, user);
  }

  @Delete(':id')
  @ApiBearerAuth()
  remove(
    @Param('id', ParseIntPipe) id: number,
    @User() user: { userId: number; email: string },
  ) {
    return this.commentsService.remove(id, user);
  }
}
