import { Role } from 'src/common/enums/role.enum';
export declare class CreateUserDto {
    name: string;
    userName: string;
    email: string;
    password: string;
    phone: string;
    gender: boolean;
    dateOfBirth: string;
}
export declare class CreateAdminDto extends CreateUserDto {
    role: Role;
    isPublished: boolean;
}
