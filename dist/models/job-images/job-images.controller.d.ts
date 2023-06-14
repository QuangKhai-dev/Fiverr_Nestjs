import { JobImagesService } from './job-images.service';
import { CreateJobImageDto } from './dto/create-job-image.dto';
import { UpdateJobImageDto } from './dto/update-job-image.dto';
export declare class JobImagesController {
    private readonly jobImagesService;
    constructor(jobImagesService: JobImagesService);
    create(createJobImageDto: CreateJobImageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateJobImageDto: UpdateJobImageDto): string;
    remove(id: string): string;
}
