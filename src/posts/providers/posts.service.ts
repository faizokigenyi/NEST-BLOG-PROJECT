import { CreatePostDto } from '../dtos/create-post.dto';
import { Injectable } from '@nestjs/common';
import { MetaOptionsService } from 'src/meta-options/providers/meta-options.service';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';

/**
 * This is the service for the posts
 */
@Injectable()
export class PostsService {
  constructor(
    /*
     * Injecting Users Service
     */
    private readonly usersService: UsersService,

    /**
     * Injecting postsRepository
     */
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,

    /**
     * Inject metaOptionsRepository
     */
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}

  /**
   * Method to create a new post
   */
  public async create(createPostDto: CreatePostDto) {
    // Create the metaOptions first if they exist
    const metaOptions = createPostDto.metaOptions
      ? this.metaOptionsRepository.create(createPostDto.metaOptions)
      : null;

    /**
     * If metaOptions exist, save them to the database
     */

    if (metaOptions) {
      await this.metaOptionsRepository.save(metaOptions);
    }

    // Create the post
    const post = this.postsRepository.create({
      ...createPostDto,
    });

    // If meta options exist add them to post
    if (metaOptions) {
      post.metaOptions = metaOptions;
    }

    return await this.postsRepository.save(post);
  }

  /**
   * Method to find all posts
   */
  public findAll(userId: string) {
    /**
     * Find user by id
     *  */
    const user = this.usersService.findOne(userId);
    return [
      { user: user, title: 'Test title', Content: 'Test Content' },
      { user: user, title: 'Test title 2', Content: 'Test Content 2' },
    ];
  }
}
