import { ApiProperty } from '@nestjs/swagger';

export class UploadImagesJobDto {
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  files: Array<Express.Multer.File>;
}
