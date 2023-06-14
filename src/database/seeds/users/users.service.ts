import { UserEntity } from 'src/models/user/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as faker from 'faker';
import * as bcrypt from 'bcrypt';
import { SALT_OR_ROUND } from 'src/util/salt.rounds';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersSeederService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async addUserSeed() {
    try {
      for (let i = 0; i < 100; i++) {
        const user = new UserEntity();
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        user.name = `${firstName} ${lastName}`;
        user.userName = faker.internet.userName();
        user.email = faker.internet.email();
        user.gender = faker.random.boolean();
        user.phone = faker.phone.phoneNumber();
        user.password = bcrypt.hashSync('123456', SALT_OR_ROUND);
        user.dateOfBirth = faker.date.past().toString();
        user.avatar = faker.image.avatar();
        user.isPublished = true;
        await this.userRepository.save(user);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
