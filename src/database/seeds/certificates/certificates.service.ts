import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CertificateEntity } from 'src/models/certificates/entities/certificate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CertificatesSeederService {
  constructor(
    @InjectRepository(CertificateEntity)
    private readonly certificateRepository: Repository<CertificateEntity>,
  ) {}

  async addCertificateSeed() {
    try {
      const listCertificate = [
        {
          name: 'AWS Solutions Architect - Associate',
          description:
            'This certification validates your knowledge of the AWS Cloud and your ability to design scalable, fault-tolerant systems.',
          link: 'https://www.udemy.com/certificate/UC-8e1b0b1a-1b1a-4b1a-8b1a-1b1a4b1a8b1a/',
          userId: 1,
        },
        {
          name: 'Microsoft Certified: Azure Developer Associate',
          description:
            'This certification validates your skills in developing solutions using Microsoft Azure services, tools, and technologies.',
          link: 'https://www.udemy.com/certificate/UC-b1a8b1a4-1b1a-8b1a-4b1a-1b1a8b1a4b1a/',
          userId: 1,
        },
        {
          name: 'Google Certified Professional Cloud Architect',
          description:
            'This certification validates your expertise in designing and managing solutions using Google Cloud Platform technologies.',
          link: 'https://www.udemy.com/certificate/UC-1b1a8b1a-4b1a-1b1a-8b1a-b1a4b1a8b1a4/',
          userId: 1,
        },
      ];
      for (let i = 0; i < listCertificate.length; i++) {
        const certificate = new CertificateEntity();
        certificate.name = listCertificate[i].name;
        certificate.description = listCertificate[i].description;
        certificate.link = listCertificate[i].link;
        certificate.userId = listCertificate[i].userId;
        await this.certificateRepository.save(certificate);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
