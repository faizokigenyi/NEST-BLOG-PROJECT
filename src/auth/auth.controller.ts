import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    // injecting the auth service
    private readonly authService: AuthService,
  ) {

    
  }
}
