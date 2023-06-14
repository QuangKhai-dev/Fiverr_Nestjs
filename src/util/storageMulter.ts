import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
export const storageMulter = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      // Generating a 32 random chars long string
      // const randomName = Array(32)
      //   .fill(null)
      //   .map(() => Math.round(Math.random() * 16).toString(16))
      //   .join('');
      //Calling the callback passing the random name generated with the original extension name
      // cb(null, `${randomName}${extname(file.originalname)}`);

      //Sử dụng thư viện uuid để tạo ra 1 chuỗi ngẫu nhiên thay vì cách trên là map array 32 phần tử
      cb(null, `${uuidv4()}${extname(file.originalname)}`);
    },
  }),
};
