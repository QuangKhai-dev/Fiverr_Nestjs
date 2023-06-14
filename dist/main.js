"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const config_1 = require("@nestjs/config");
const hbs = require("hbs");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const configService = app.get(config_1.ConfigService);
    const adminConfig = {
        projectId: configService.get('FIREBASE_PROJECT_ID'),
        privateKey: configService
            .get('FIREBASE_PRIVATE_KEY')
            .replace(/\\n/g, '\n'),
        clientEmail: configService.get('FIREBASE_CLIENT_EMAIL'),
    };
    admin.initializeApp({
        credential: admin.credential.cert(adminConfig),
        storageBucket: 'gs://fiverr-clone-be.appspot.com',
    });
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    hbs.registerPartials((0, path_1.join)(__dirname, '..', 'views/partials'));
    app.setViewEngine('hbs');
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({}));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Fiverr Clone example')
        .setDescription('The Fiverr Clone API description make by Q.K')
        .addBearerAuth()
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/swagger', app, document);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map