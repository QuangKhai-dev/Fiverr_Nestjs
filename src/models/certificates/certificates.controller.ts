import { PartialType } from '@nestjs/mapped-types';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { Public } from 'src/decorators/jwt.decorator';
import {
  CertificateDto,
  UpdateCertificateDto,
} from './dto/create-certificate.dto';
import { User } from 'src/decorators/user.decorator';

@Controller('certificates')
@ApiTags('Certificates-Done')
export class CertificatesController {
  constructor(private readonly certificatesService: CertificatesService) {}

  @Post()
  @ApiBearerAuth()
  // @Roles(Role.User)
  // @Public()
  create(
    @Body() createCertificateDto: CertificateDto,
    @User() user: { userId: number; email: string },
  ) {
    return this.certificatesService.create(createCertificateDto, user);
  }

  @Get('get-all-user')
  @ApiBearerAuth()
  findAllByUser(@User() user: { userId: number; email: string }) {
    return this.certificatesService.findAllByUser(user);
  }

  @Get(':id')
  @ApiBearerAuth()
  findOneById(
    @Param('id', ParseIntPipe) id: number,
    @User() user: { userId: number; email: string },
  ) {
    return this.certificatesService.findOneById(id, user);
  }

  @Get(':name')
  @ApiBearerAuth()
  findAllByName(
    @Param('name') name: string,
    @User() user: { userId: number; email: string },
  ) {
    return this.certificatesService.findAllByName(name, user);
  }

  @Put(':id')
  @ApiBearerAuth()
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCertificateDto: UpdateCertificateDto,
    @User() user: { userId: number; email: string },
  ) {
    return this.certificatesService.update(id, updateCertificateDto, user);
  }

  @Delete(':id')
  @ApiBearerAuth()
  remove(
    @Param('id', ParseIntPipe) id: number,
    @User() user: { userId: number; email: string },
  ) {
    return this.certificatesService.remove(id, user);
  }
}
