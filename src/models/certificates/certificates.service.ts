import { templateRespone } from 'src/util/exampleRespone';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpStatus } from '@nestjs/common';
import { CertificateEntity } from './entities/certificate.entity';
import { And, Repository } from 'typeorm';
import {
  CertificateDto,
  UpdateCertificateDto,
} from './dto/create-certificate.dto';

@Injectable()
export class CertificatesService {
  constructor(
    @InjectRepository(CertificateEntity)
    private certificateRepository: Repository<CertificateEntity>,
  ) {}

  async create(
    createCertificateDto: CertificateDto,
    user: { userId: number; email: string },
  ) {
    const certificate = this.certificateRepository.create({
      ...createCertificateDto,
      userId: user.userId,
    });
    await this.certificateRepository.save(certificate);
    return templateRespone(HttpStatus.CREATED, 'thêm thành công', certificate);
  }

  async findAllByUser(user: { userId: number; email: string }) {
    const certificates = await this.certificateRepository.find({});
    if (certificates.length === 0) {
      return templateRespone(
        HttpStatus.NOT_FOUND,
        'không tìm thấy dữ liệu',
        null,
      );
    }
    return templateRespone(HttpStatus.OK, 'thành công', certificates);
  }

  async findAllByName(name: string, user: { userId: number; email: string }) {
    const certificates = await this.certificateRepository
      .createQueryBuilder('certificates')
      .where('certificates.name like :name', { name: `%${name}%` })
      .andWhere('certificates.userId = :userId', { userId: user.userId })
      .getMany();
    console.log(certificates);
    return templateRespone(HttpStatus.OK, 'Data', certificates);
  }

  async findOneById(id: number, user: { userId: number; email: string }) {
    console.log(id);
    console.log(user.userId);
    const certificate = await this.certificateRepository
      .createQueryBuilder('certificates')
      .where('certificates.id = :id', { id: id })
      .andWhere('certificates.userId = :userId', { userId: user.userId })
      .getOne();
    if (!certificate) {
      return templateRespone(
        HttpStatus.NOT_FOUND,
        'không tìm thấy dữ liệu',
        null,
      );
    }
    return templateRespone(HttpStatus.OK, 'thành công', certificate);
  }

  async update(
    id: number,
    updateCertificateDto: UpdateCertificateDto,
    user: { userId: number; email: string },
  ) {
    const certificate = await this.certificateRepository.findOne({
      where: {
        id,
      },
    });
    if (!certificate) {
      return templateRespone(
        HttpStatus.NOT_FOUND,
        'không tìm thấy dữ liệu',
        null,
      );
    }
    if (certificate.userId !== user.userId) {
      return templateRespone(
        HttpStatus.FORBIDDEN,
        'không có quyền truy cập',
        null,
      );
    }
    await this.certificateRepository.update(id, updateCertificateDto);
    return templateRespone(HttpStatus.OK, 'thành công', null);
  }

  async remove(id: number, user: { userId: number; email: string }) {
    const certificate = await this.certificateRepository.findOne({
      where: {
        id,
      },
    });
    if (!certificate) {
      return templateRespone(
        HttpStatus.NOT_FOUND,
        'không tìm thấy dữ liệu',
        null,
      );
    }
    if (certificate.userId !== user.userId) {
      return templateRespone(
        HttpStatus.FORBIDDEN,
        'không có quyền truy cập',
        null,
      );
    }
    await this.certificateRepository.delete(id);
    return templateRespone(HttpStatus.OK, 'thành công', null);
  }
}
