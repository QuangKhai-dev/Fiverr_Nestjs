import { HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';

export const handleCheckNotExsit = async <T>(
  EntityService: Repository<T>,
  id: number,
) => {
  const checkExist: T = await EntityService.findOneBy(
    //write to handle typescript
    // id is one of key of T
    { id } as any,
  );
  if (!checkExist) {
    throw new HttpException('User not exists', HttpStatus.BAD_REQUEST);
  }
  return checkExist;
};
