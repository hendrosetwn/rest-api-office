import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    try {
      const result = await this.prisma.user.create({ data });

      return {
        succes: true,
        message: 'Succes create Address',
        status: HttpStatus.OK,
        data: result,
      };
    } catch (error) {
      const message = this.prisma.exceptions(error);
      throw new BadRequestException(message);
    }
  }

  async findAll() {
    try {
      const data = await this.prisma.user.findMany();

      return {
        succes: true,
        message: 'Succes create Address',
        status: HttpStatus.OK,
        data,
      };
    } catch (error) {
      const message = this.prisma.exceptions(error);
      throw new BadRequestException(message);
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.prisma.user.findUnique({ where: { id } });

      return {
        succes: true,
        message: `Succes find user ${data.name}`,
        status: HttpStatus.OK,
        data,
      };
    } catch (error) {
      const message = this.prisma.exceptions(error);
      throw new BadRequestException(message);
    }
  }

  async update(id: number, data: UpdateUserDto) {
    try {
      const result = await this.prisma.user.update({
        where: { id },
        data,
      });
      return {
        succes: true,
        message: `Succes update user`,
        status: HttpStatus.OK,
        data: result,
      };
    } catch (error) {
      const message = this.prisma.exceptions(error);
      throw new BadRequestException(message);
    }
  }

  async remove(id: number) {
    try {
      const result = await this.prisma.user.delete({ where: { id } });

      return {
        succes: true,
        message: `Succes delete user`,
        status: HttpStatus.OK,
        data: result,
      };
    } catch (error) {
      const message = this.prisma.exceptions(error);
      throw new BadRequestException(message);
    }
  }
}
