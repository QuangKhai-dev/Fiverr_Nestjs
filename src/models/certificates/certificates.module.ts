import { CertificateEntity } from './entities/certificate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CertificatesController } from './certificates.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CertificateEntity])],
  controllers: [CertificatesController],
  providers: [CertificatesService],
})
export class CertificatesModule {}
