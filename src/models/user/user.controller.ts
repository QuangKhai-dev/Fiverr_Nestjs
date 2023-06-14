import { User } from './../../decorators/user.decorator';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { storageMulter } from '../../util/storageMulter';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, CreateAdminDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { ParseFilePipeBuilder, HttpStatus } from '@nestjs/common';
import { Roles } from 'src/decorators/role.decorator';
import { Role } from 'src/common/enums/role.enum';
import { Public } from 'src/decorators/jwt.decorator';
import { UserHeader } from 'src/common/types/user.types';

@ApiTags('User-Done')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @Public()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('register-admin')
  @ApiBearerAuth()
  @Roles(Role.SuperAdmin, Role.Admin)
  createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.userService.createAdmin(createAdminDto);
  }

  @Get('get-all')
  @Public()
  findAll() {
    return this.userService.findAll();
  }

  @Get('profile')
  @ApiBearerAuth()
  getProfile(@User() user: { userId: number; email: string }) {
    return this.userService.getProfile(user);
  }

  @Get(':id')
  @ApiBearerAuth()
  @Roles(Role.SuperAdmin, Role.Admin)
  //operation để tạo mô tả cho api
  // @ApiOperation({ summary: 'Create cat' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  @ApiBearerAuth()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
        userName: {
          type: 'string',
        },
        phone: {
          type: 'string',
        },
        gender: {
          type: 'boolean',
        },
      },
    },
  })
  update(@Body() updateUserDto: UpdateUserDto, @User() user: UserHeader) {
    return this.userService.update(user.userId, updateUserDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.SuperAdmin, Role.Admin)
  remove(
    @Param('id', ParseIntPipe) id: number,
    // @Headers('Authorization') token: string,
  ) {
    return this.userService.remove(id);
  }

  //upload Avatar
  //upload Avatar
  //Chỗ này coi lại sửa không cần gửi Id, check trên authorazion luôn
  @Post('avatar')
  @UseInterceptors(FileInterceptor('file', storageMulter))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Upsert Profile Photos' })
  @ApiBearerAuth()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        userId: {
          type: 'number',
        },
      },
    },
  })
  uploadAvatar(
    @UploadedFile(
      //Này để check đầu vào của file upload
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpeg',
        })
        // .addMaxSizeValidator({
        //   maxSize: 10000,
        // })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
    @Body('userId', new ParseIntPipe()) userId: number,
  ) {
    return this.userService.uploadAvatar(file, userId);
  }
}
