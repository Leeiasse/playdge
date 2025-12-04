import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

export class LoginDto {
  email!: string;
  password!: string;
}

export class RegisterDto {
  email!: string;
  password!: string;
  name?: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const validUser = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!validUser) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return { error: 'Invalid credentials' } as any;
    }

    return this.authService.login(validUser);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(
      registerDto.email,
      registerDto.password,
      registerDto.name,
    );
  }
}
