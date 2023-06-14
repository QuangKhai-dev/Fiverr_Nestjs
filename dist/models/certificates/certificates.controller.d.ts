import { CertificatesService } from './certificates.service';
import { CertificateDto, UpdateCertificateDto } from './dto/create-certificate.dto';
export declare class CertificatesController {
    private readonly certificatesService;
    constructor(certificatesService: CertificatesService);
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
    findOneById(id: number, user: {
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
