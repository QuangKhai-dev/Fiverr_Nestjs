import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseJsonPipe implements PipeTransform<any> {
  transform(value: any) {
    try {
      return JSON.parse(value);
    } catch (e) {
      throw new BadRequestException('Invalid JSON string');
    }
  }
}
