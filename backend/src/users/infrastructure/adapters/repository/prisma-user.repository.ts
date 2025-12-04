import { Injectable } from '@nestjs/common';
import { UserRepositoryPort } from 'src/users/domain/ports/user.repository.port';
import { User } from 'src/users/domain/model/user.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User as PrismaUser } from '@prisma/client';

@Injectable()
export class PrismaUserRepository implements UserRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async save(user: User): Promise<User> {
    const data: Prisma.UserCreateInput = {
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.passwordHash,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    const saved = await this.prisma.user.upsert({
      where: { id: user.id },
      update: {
        email: user.email,
        name: user.name,
        password: user.passwordHash,
        updatedAt: new Date(),
      },
      create: data,
    });

    return this.toDomain(saved);
  }

  async findByEmail(email: string): Promise<User | null> {
    const found = await this.prisma.user.findUnique({ where: { email } });
    return found ? this.toDomain(found) : null;
  }

  async findById(id: string): Promise<User | null> {
    const found = await this.prisma.user.findUnique({ where: { id } });
    return found ? this.toDomain(found) : null;
  }

  private toDomain(prismaUser: PrismaUser): User {
    return new User(
      prismaUser.id,
      prismaUser.email,
      prismaUser.name,
      prismaUser.password,
      prismaUser.createdAt,
      prismaUser.updatedAt,
    );
  }
}
