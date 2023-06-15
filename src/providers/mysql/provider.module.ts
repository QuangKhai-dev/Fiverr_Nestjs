import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: process.env.DATABASE_URL || 'localhost',
        port: 3306,
        username: 'root',
        password: '12345678',
        database: 'db_fiverr_clone',
        //Cách này dùng thêm tay Entity
        // entities: [UserEntity],
        //Cách này tự động load Entity
        autoLoadEntities: true,
        // synchronize: false,
        synchronize: true,
        //seeding
      }),
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class MySQLDatabaseProviderModule {}
