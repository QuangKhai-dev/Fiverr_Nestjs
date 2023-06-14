import { CertificateEntity } from 'src/models/certificates/entities/certificate.entity';
import { Repository } from 'typeorm';
export declare class CertificatesSeederService {
    private readonly certificateRepository;
    constructor(certificateRepository: Repository<CertificateEntity>);
    addCertificateSeed(): Promise<void>;
}
