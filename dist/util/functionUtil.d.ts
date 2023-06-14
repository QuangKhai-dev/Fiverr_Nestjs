import { Repository } from 'typeorm';
export declare const handleCheckNotExsit: <T>(EntityService: Repository<T>, id: number) => Promise<T>;
