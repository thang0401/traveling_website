import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/User/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findByName(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
