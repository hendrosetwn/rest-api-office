import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAddressDto) {
    try {
      const result = await this.prisma.address.create({ data });

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
      const data = await this.prisma.address.findMany();

      return {
        succes: true,
        message: 'Succes get All Address',
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
      const data = await this.prisma.address.findUnique({ where: { id } });

      return {
        succes: true,
        message: 'Succes get All Address',
        status: HttpStatus.OK,
        data,
      };
    } catch (error) {
      const message = this.prisma.exceptions(error);
      throw new BadRequestException(message);
    }
  }

  async update(id: number, data: UpdateAddressDto) {
    try {
      const result = await this.prisma.address.update({ where: { id }, data });

      return {
        succes: true,
        message: 'Succes Update Address',
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
      const result = await this.prisma.address.delete({ where: { id } });

      return {
        succes: true,
        message: 'Succes Delete Address',
        status: HttpStatus.OK,
        data: result,
      };
    } catch (error) {
      const message = this.prisma.exceptions(error);
      throw new BadRequestException(message);
    }
  }
}
