import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { UsersModule } from 'src/users/users.module';
import { forwardRef } from '@nestjs/common';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
  imports: [UsersModule],
})
export class PostsModule {}
