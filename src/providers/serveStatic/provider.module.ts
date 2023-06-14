import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      //Set up stastic dẫn tới thư mục chứa hình ảnh, vd muốn loại bỏ uploads trong url thì viết như dưới
      rootPath: join(__dirname, '..', 'uploads'),
      // rootPath: join(__dirname, '..'),
      exclude: ['/api*'],
    }),
  ],
})
export class ServeStaticProviderModule {}
