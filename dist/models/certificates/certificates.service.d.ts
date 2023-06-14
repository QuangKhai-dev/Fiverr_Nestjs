import { CertificateEntity } from './entities/certificate.entity';
import { Repository } from 'typeorm';
import { CertificateDto, UpdateCertificateDto } from './dto/create-certificate.dto';
export declare class CertificatesService {
    private certificateRepository;
    constructor(certificateRepository: Repository<CertificateEntity>);
    create(createCertificateDto: CertificateDto, user: {
        userId: number;
        email: string;
    }): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    findAllByUser(user: {
        userId: number;
        email: string;
    }): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    findAllByName(name: string, user: {
        userId: number;
        email: string;
    }): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    findOneById(id: number, user: {
        userId: number;
        email: string;
    }): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    update(id: number, updateCertificateDto: UpdateCertificateDto, user: {
        userId: number;
        email: string;
    }): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    remove(id: number, user: {
        userId: number;
        email: string;
    }): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
}
