import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostNotFoundException } from './exceptions/postNotFound.exception';
import { CreatePostDto } from './dto/createPost.dto';
import { updatePostDto } from './dto/updatePost.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaError } from 'src/posts/utils/prismaError';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createPost(post: CreatePostDto) {
    return this.prismaService.post.create({ data: post });
  }

  async getPosts() {
    return this.prismaService.post.findMany();
  }

  async getPostById(id: number) {
    const post = await this.prismaService.post.findUnique({ where: { id } });
    if (!post) {
      throw new PostNotFoundException(id);
    }
    return post;
  }

  async updatePost(id: number, post: updatePostDto) {
    try {
      return await this.prismaService.post.update({
        data: { ...post, id: undefined },
        where: { id },
      });
    } catch (error) {}
  }

  async deletePost(id: number) {
    try {
      return this.prismaService.post.delete({ where: { id } });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new PostNotFoundException(id);
      }
      throw error;
    }
  }
}
