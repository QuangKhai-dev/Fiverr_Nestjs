import { UserEntity } from 'src/models/user/entities/user.entity';
export declare class SkillEntity {
    id: number;
    name: string;
    users: UserEntity[];
}
