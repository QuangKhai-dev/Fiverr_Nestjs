/// <reference types="multer" />
import { CreateAdminDto, CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    create(dto: CreateUserDto): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    createAdmin(dto: CreateAdminDto): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    getProfile(user: {
        userId: number;
        email: string;
    }): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    findAll(): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    findOne(id: number): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    findByEmail(email: string): Promise<UserEntity>;
    uploadAvatar(file: Express.Multer.File, dto: number): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    remove(id: number): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
}
