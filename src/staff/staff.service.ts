import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateStaffDto) {
    try {
      const result = await this.prisma.staff.create({ data });
      return {
        succes: true,
        message: 'Succes create Staff',
        status: HttpStatus.OK,
        data: result,
      };
    } catch (error) {
      const message = this.prisma.exceptions(error);
      throw new BadRequestException(message);
    }
  }

  async findAll() {
    const data = await this.prisma.staff.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        office: { select: { id: true, name: true, country: true } },
      },
    });
    try {
      return {
        succes: true,
        message: 'Succes returns all staff',
        status: HttpStatus.OK,
        data,
      };
    } catch (error) {
      const message = this.prisma.exceptions(error);
      throw new BadRequestException(message);
    }
  }

  async findOne(id: number) {
    const data = await this.prisma.staff.findUnique({
      where: { id },
      include: { office: true },
    });
    try {
      return {
        succes: true,
        message: `Succes returns a #${id} staff`,
        status: HttpStatus.OK,
        data,
      };
    } catch (error) {
      const message = this.prisma.exceptions(error);
      throw new BadRequestException(message);
    }
  }

  async update(id: number, data: UpdateStaffDto) {
    const result = await this.prisma.staff.update({
      where: { id },
      data: { ...data },
    });
    try {
      return {
        succes: true,
        message: `Succes updates a #${id} staff`,
        status: HttpStatus.OK,
        data: result,
      };
    } catch (error) {
      const message = this.prisma.exceptions(error);
      throw new BadRequestException(message);
    }
  }

  async remove(id: number) {
    const result = await this.prisma.staff.delete({
      where: { id },
    });
    try {
      return {
        succes: true,
        message: `Succes removes a #${id} staff`,
        status: HttpStatus.OK,
        data: result,
      };
    } catch (error) {
      const message = this.prisma.exceptions(error);
      throw new BadRequestException(message);
    }
  }
}
