import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import UserEntity from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
  ) {}

  async createUser(body: any) {
    const user = await this.userRepository.findBy({
      email: body.email,
      password: body.password
    });    

    if (user.length === 0) { 
      const user = this.userRepository.create(body);

      let result = this.userRepository.save(user);
      const state = { state: true };
      return { ...result, ...state };
    }

    return { state: false, message: 'user already exist' };
  }

  async findUser(email: string, password: string) {    
    const user = await this.userRepository.findBy({
      email: email,
      password: password
    });    

    if (user.length === 0) { return false; }

    return true;
  }
}
