/// <reference types="multer" />
import { UserService } from './user.service';
import { CreateUserDto, CreateAdminDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserHeader } from 'src/common/types/user.types';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    createAdmin(createAdminDto: CreateAdminDto): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    findAll(): Promise<{
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
    findOne(id: number): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    update(updateUserDto: UpdateUserDto, user: UserHeader): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    remove(id: number): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    uploadAvatar(file: Express.Multer.File, userId: number): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
}
