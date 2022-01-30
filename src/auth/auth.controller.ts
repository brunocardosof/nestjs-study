import {
  Body,
  ConflictException,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<User | ConflictException | InternalServerErrorException> {
    return this.authService.signUp(authCredentialsDto);
  }
}
