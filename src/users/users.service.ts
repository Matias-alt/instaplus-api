import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import UserEntity from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
  ) {}

  createUser(body: any) {
    console.log('DESDE EL SERVICIO');
    console.log(body);
    console.log(this.userRepository);
    

    const user = this.userRepository.create(body);
    return this.userRepository.save(user);
  }

  async findUser(email: string, password: string) {
    const user = await this.userRepository.findBy({
      email: email,
      password: password
    });

    if (user) { return true; }

    return false;
  }
}
