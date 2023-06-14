import { UserEntity } from 'src/models/user/entities/user.entity';
export declare class JobEntity {
    id: number;
    name: string;
    rating: number;
    price: number;
    description: string;
    userId: number;
    user: UserEntity;
}
