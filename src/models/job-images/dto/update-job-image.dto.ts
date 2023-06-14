import { PartialType } from '@nestjs/mapped-types';
import { CreateJobImageDto } from './create-job-image.dto';

export class UpdateJobImageDto extends PartialType(CreateJobImageDto) {}
