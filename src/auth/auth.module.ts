import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './providers/auth.service';

@Module({
  exports: [AuthService],
  controllers: [AuthController],
  providers: [AuthService],
  imports: [forwardRef(() => UsersModule)],
})
export class AuthModule {}
