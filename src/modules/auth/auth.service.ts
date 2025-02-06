import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../common/database/prisma/prisma.service';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.users.findUnique({ where: { email } });
    if (user && (await this.comparePasswords(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any, res: Response) {
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      expires: new Date(Date.now() + 3600000), // 1 hour
    });

    return { message: 'Logged in successfully' };
  }

  async googleLogin(profile: any, res: Response) {
    let user = await this.prisma.users.findUnique({
      where: { email: profile.email },
    });

    if (!user) {
      user = await this.prisma.users.create({
        data: {
          email: profile.email,
          name: profile.name,
          googleId: profile.id,
          password: '', // Add default values for required fields
          active: 'true',
          role: 'USER'
        }
      });
    }

    return this.login(user, res);
  }

  private async comparePasswords(password: string, hashedPassword: string) {
    // Implement password comparison logic
    return true; // Temporary return for setup
  }
} 