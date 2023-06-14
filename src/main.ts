import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// Import firebase-admin
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import { ConfigService } from '@nestjs/config';
import * as hbs from 'hbs';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //Cho phép CORS
  app.enableCors();
  //Set up firebase admin
  // Set the config options
  const configService: ConfigService = app.get(ConfigService);
  const adminConfig: ServiceAccount = {
    projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
    privateKey: configService
      .get<string>('FIREBASE_PRIVATE_KEY')
      .replace(/\\n/g, '\n'),
    clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
  };

  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    storageBucket: 'gs://fiverr-clone-be.appspot.com',

    // databaseURL: 'https://xxxxx.firebaseio.com',
  });

  //hbs
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  hbs.registerPartials(join(__dirname, '..', 'views/partials'));

  app.setViewEngine('hbs');

  //Set đầu vào url api cho toàn bộ ứng dụng
  app.setGlobalPrefix('api');
  // check validation đầu vào dữ liệu
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true thì các trường gửi lên không có trong dto sẽ không nhận dc vd dto có email, gửi lên có thêm password thì password sẽ không nhận dc
      // thg này hơi nguy hiểm, để nó vô thì nó chặn hơi ác chiến
      // whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Fiverr Clone example')
    .setDescription('The Fiverr Clone API description make by Q.K')
    .addBearerAuth()
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
