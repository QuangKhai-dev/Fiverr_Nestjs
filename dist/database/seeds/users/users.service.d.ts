import { UserEntity } from 'src/models/user/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersSeederService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    addUserSeed(): Promise<void>;
}
