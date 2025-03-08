import { Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { PostsService } from "./providers/posts.service";
import { UsersModule } from "src/users/users.module";
import { forwardRef } from "@nestjs/common";
import { Type } from "class-transformer";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./providers/post.entity";
import { MetaOption } from "src/meta-options/meta-option.entity";

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
  imports: [UsersModule, TypeOrmModule.forFeature([Post, MetaOption])],
})
export class PostsModule {}
