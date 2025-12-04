import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { PrismaUserRepository } from './infrastructure/adapters/repository/prisma-user.repository';
import { USER_REPOSITORY } from './domain/ports/user.repository.port';

@Module({
  imports: [PrismaModule],
  providers: [
    CreateUserUseCase,
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [CreateUserUseCase, USER_REPOSITORY],
})
export class UsersModule {}
