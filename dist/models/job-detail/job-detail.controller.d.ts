import { JobDetailService } from './job-detail.service';
import { CreateJobDetailDto } from './dto/create-job-detail.dto';
import { UpdateJobDetailDto } from './dto/update-job-detail.dto';
export declare class JobDetailController {
    private readonly jobDetailService;
    constructor(jobDetailService: JobDetailService);
    create(createJobDetailDto: CreateJobDetailDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateJobDetailDto: UpdateJobDetailDto): string;
    remove(id: string): string;
}
