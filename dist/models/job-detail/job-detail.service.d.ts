import { CreateJobDetailDto } from './dto/create-job-detail.dto';
import { UpdateJobDetailDto } from './dto/update-job-detail.dto';
export declare class JobDetailService {
    create(createJobDetailDto: CreateJobDetailDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateJobDetailDto: UpdateJobDetailDto): string;
    remove(id: number): string;
}
