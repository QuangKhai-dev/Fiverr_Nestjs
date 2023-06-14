import { Injectable } from '@nestjs/common';
import { CreateJobImageDto } from './dto/create-job-image.dto';
import { UpdateJobImageDto } from './dto/update-job-image.dto';

@Injectable()
export class JobImagesService {
  create(createJobImageDto: CreateJobImageDto) {
    return 'This action adds a new jobImage';
  }

  findAll() {
    return `This action returns all jobImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobImage`;
  }

  update(id: number, updateJobImageDto: UpdateJobImageDto) {
    return `This action updates a #${id} jobImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobImage`;
  }
}
