import { PipeTransform } from '@nestjs/common';
export declare class ParseJsonPipe implements PipeTransform<any> {
    transform(value: any): any;
}
