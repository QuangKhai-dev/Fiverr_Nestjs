import { JwtService } from '@nestjs/jwt';
import { SeederModule } from './database/seeds/seeder.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './models/user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SkillsModule } from './models/skills/skills.module';
import { JobsModule } from './models/jobs/jobs.module';
import { CertificatesModule } from './models/certificates/certificates.module';
import { CommentsModule } from './models/comments/comments.module';
import { APP_GUARD } from '@nestjs/core';
import { JobDetailModule } from './models/job-detail/job-detail.module';
import { CategorySkillsModule } from './models/main-category/category-skills.module';
import { MySQLDatabaseProviderModule } from './providers/mysql/provider.module';
import { ServeStaticProviderModule } from './providers/serveStatic/provider.module';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
@Module({
  imports: [
    ConfigModule.forRoot({
      // sử dụng khi file biến môi trường k phải tên .env
      // envFilePath : 'development.env',
      isGlobal: true,
    }),
    //Test cache
    // CacheModule.register(),
    //Tách mysql ra thành 1 module riêng dễ quản lí
    MySQLDatabaseProviderModule,
    AuthModule,
    //Tách serveStatic (Đường dẫn lưu hình) ra thành 1 module riêng dễ quản lí
    ServeStaticProviderModule,
    SkillsModule,
    JobsModule,
    CertificatesModule,
    CommentsModule,
    JobDetailModule,
    CategorySkillsModule,
    UserModule,
    SeederModule,
  ],
  controllers: [AppController],
  providers: [
    JwtService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    //why do we need to inject JwtService here?
    //Because we need to use it in the guard
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
