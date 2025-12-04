import { Injectable, Inject } from '@nestjs/common';
import {
  type UserRepositoryPort,
  USER_REPOSITORY,
} from 'src/users/domain/ports/user.repository.port';
import { User } from 'src/users/domain/model/user.model';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepositoryPort,
  ) {}

  async execute(email: string, password: string, name?: string): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User(
      uuidv4(),
      email,
      name || null,
      passwordHash,
      new Date(),
      new Date(),
    );

    return this.userRepository.save(user);
  }
}
