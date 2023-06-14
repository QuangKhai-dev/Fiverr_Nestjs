import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
export class CreateCommentDto {
  @IsString()
  @ApiProperty()
  content: string;

  @IsNumber()
  @ApiProperty()
  jobId: number;
}
export class UpdateCommentDto extends PickType(CreateCommentDto, [
  'content',
] as const) {}
