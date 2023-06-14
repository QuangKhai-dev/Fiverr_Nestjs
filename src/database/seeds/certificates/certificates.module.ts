import { CertificatesSeederService } from './certificates.service';
import { CertificateEntity } from './../../../models/certificates/entities/certificate.entity';
import { UserEntity } from 'src/models/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, CertificateEntity])],
  providers: [CertificatesSeederService],
  exports: [CertificatesSeederService],
})
export class CertificatesSeederModule {}
