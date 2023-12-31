import { SeederModule } from './database/seeds/seeder.module';
import { NestFactory } from '@nestjs/core';
import { Seeder } from './database/seeds/seeder';
async function bootstrap(): Promise<void> {
  const appContext = await NestFactory.createApplicationContext(SeederModule);

  const seeder = appContext.get(Seeder);
  try {
    // await seeder.insertUser();
    // await seeder.insertSkill();
    // await seeder.insertCertificate();
    await seeder.insertCategorySkill();

    //     await seeder.insertLanguages();
    //     await seeder.insertLocationCategories();
    //     await seeder.insertRoles();
    //     await seeder.insertVehicleTypes();
    //     await seeder.insertLocationCategory('hotel');
    //     await seeder.insertLocationCategory('shopping');
    //     await seeder.insertLocationCategory('restaurant');
    //     await seeder.insertLocationCategory('visit');
    //     await seeder.insertStrength();
    //     await seeder.insertImagesLocation();
    //     await seeder.insertAccount();
    //     await seeder.insertAccountTourGuideBusiness();
    //     await seeder.insertBank();
    //     await seeder.insertCommission();
    //     await seeder.insertConfiguration();
  } catch (error) {
    console.error(error);
  } finally {
    appContext.close();
  }
}

bootstrap();
