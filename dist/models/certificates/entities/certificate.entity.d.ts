import { UserEntity } from 'src/models/user/entities/user.entity';
export declare class CertificateEntity {
    id: number;
    name: string;
    description: string;
    link: string;
    userId: number;
    user: UserEntity;
}
