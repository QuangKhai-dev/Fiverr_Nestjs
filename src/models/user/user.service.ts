import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateAdminDto, CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { SALT_OR_ROUND } from 'src/util/salt.rounds';
import * as bcrypt from 'bcrypt';
import { templateRespone } from 'src/util/exampleRespone';
import { UpdateUserDto } from './dto/update-user.dto';
import { handleCheckNotExsit } from 'src/util/functionUtil';
import { Role } from 'src/common/enums/role.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>, // @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(dto: CreateUserDto) {
    try {
      //check if user exists
      const checkExist = await this.userRepository.findOneBy({
        email: dto.email,
      });
      if (checkExist && checkExist.isPublished) {
        throw new BadRequestException('Email already exists');
      }
      //if user exists but not published, delete it
      if (checkExist && !checkExist.isPublished) {
        await this.userRepository.delete(checkExist.id);
      }
      //create user
      // Hash Password
      const hashPass = await bcrypt.hash(dto.password, SALT_OR_ROUND);
      const newUser = await this.userRepository.save({
        ...dto,
        password: hashPass,
      });
      delete newUser.password;
      delete newUser.isPublished;
      return templateRespone(HttpStatus.CREATED, 'Xử lí thành công', newUser);
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createAdmin(dto: CreateAdminDto) {
    const checkExist = await this.userRepository.findOneBy({
      email: dto.email,
    });
    if (checkExist) {
      throw new BadRequestException('Email already exists');
    }
    const hashPass = await bcrypt.hash(dto.password, SALT_OR_ROUND);
    const newUser: CreateAdminDto = await this.userRepository.save({
      ...dto,
      password: hashPass,
      role: Role.Admin,
    });

    delete newUser.password;
    delete newUser.isPublished;

    return templateRespone(HttpStatus.CREATED, 'Xử lí thành công', newUser);
  }

  async getProfile(user: { userId: number; email: string }) {
    try {
      const { userId } = user;
      const userFound = await this.userRepository.findOne({
        where: { id: userId, isPublished: true },
        relations: ['skills', 'certificates'],
      });
      if (!userFound) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      delete userFound.password;
      return templateRespone(HttpStatus.OK, 'Xử lí thành công', userFound);
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      const getAllUser = await this.userRepository.find({
        where: { isPublished: true },
        //Xử lí lấy dữ liệu các bảng có relation ntn nhé
        relations: ['skills', 'certificates'],
      });
      //remove password and ispublished
      getAllUser.forEach((user) => {
        delete user.password;
        delete user.isPublished;
      });
      return templateRespone(HttpStatus.OK, 'Xử lí thành công', getAllUser);
    } catch (err) {
      console.log(err);
      // throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    // await this.cacheManager.set('key', 'value');
    // const value = await this.cacheManager.get('key');
    try {
      const user = await this.userRepository.findOne({
        where: { id, isPublished: true },
        relations: ['skills', 'certificates'],
      });
      if (!user) {
        throw new BadRequestException('User not found');
      }
      delete user.password;
      return templateRespone(HttpStatus.OK, 'Xử lí thành công', user);
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({
      relations: ['skills', 'certificates'],
      where: {
        email,
      },
    });
  }

  async uploadAvatar(file: Express.Multer.File, dto: number) {
    const user = await this.userRepository.findOneBy({
      id: dto,
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    // const
    // Update avatar
    const avatar = await this.userRepository.save({
      ...user,
      avatar: file.filename,
    });
    return templateRespone(HttpStatus.OK, 'Xử lí thành công', avatar);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user || !user.isPublished) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    try {
      this.userRepository.update(id, { isPublished: false });
      return templateRespone(HttpStatus.OK, 'Xử lí thành công');
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user || !user.isPublished) {
      throw new BadRequestException('User not found');
    }
    try {
      const hashPass = await bcrypt.hash(updateUserDto.password, SALT_OR_ROUND);
      const updatedUser = await this.userRepository.save({
        ...user,
        ...updateUserDto,
        password: hashPass,
      });
      delete updatedUser.password;
      delete updatedUser.isPublished;
      return templateRespone(HttpStatus.OK, 'Xử lí thành công', updatedUser);
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
