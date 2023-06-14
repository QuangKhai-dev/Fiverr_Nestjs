import { Roles } from './../../../common/types/user.types';
import { CertificateEntity } from '../../certificates/entities/certificate.entity';
import { SkillEntity } from 'src/models/skills/entities/skill.entity';
export declare class UserEntity {
    id: number;
    name: string;
    userName: string;
    email: string;
    password: string;
    phone: string;
    gender: boolean;
    isPublished: boolean;
    role: Roles;
    avatar: string;
    dateOfBirth: string;
    createdAt: Date;
    certificates: CertificateEntity[];
    skills: SkillEntity[];
}
