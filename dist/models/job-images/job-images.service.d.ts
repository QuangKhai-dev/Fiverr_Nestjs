import { CreateJobImageDto } from './dto/create-job-image.dto';
import { UpdateJobImageDto } from './dto/update-job-image.dto';
export declare class JobImagesService {
    create(createJobImageDto: CreateJobImageDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateJobImageDto: UpdateJobImageDto): string;
    remove(id: number): string;
}
