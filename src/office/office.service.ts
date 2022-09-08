import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { Staff } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';

@Injectable()
export class OfficeService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateOfficeDto) {
    try {
      const result = await this.prisma.office.create({ data });

      return {
        succes: true,
        message: 'This action adds a new office',
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
      const data = await this.prisma.office.findMany();

      return {
        succes: true,
        message: 'This action returns all office',
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
      const data = await this.prisma.office.findUnique({ where: { id } });
      return {
        succes: true,
        message: `This action returns a #${id} office`,
        status: HttpStatus.OK,
        data,
      };
    } catch (error) {
      const message = this.prisma.exceptions(error);
      throw new BadRequestException(message);
    }
  }

  async update(id: number, data: UpdateOfficeDto) {
    try {
      const result = await this.prisma.office.update({ where: { id }, data });
      return {
        succes: true,
        message: `This action updates a #${id} office`,
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
      const result = await this.prisma.office.delete({ where: { id } });
      return {
        succes: true,
        message: `This action deletes a #${id} office`,
        status: HttpStatus.OK,
        data: result,
      };
    } catch (error) {
      const message = this.prisma.exceptions(error);
      throw new BadRequestException(message);
    }
  }
}
