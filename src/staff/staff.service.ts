import { BadRequestException, Injectable } from '@nestjs/common';
import { Office } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateStaffDto, office: Office) {
    try {
      const result = await this.prisma.staff.create({
        data: { ...data },
        office: { create: { id: office.id } },
      });
      return {};
    } catch (error) {
      const message = this.prisma.exceptions(error);
      throw new BadRequestException(message);
    }
  }

  findAll() {
    return `This action returns all staff`;
  }

  findOne(id: number) {
    return `This action returns a #${id} staff`;
  }

  update(id: number, updateStaffDto: UpdateStaffDto) {
    return `This action updates a #${id} staff`;
  }

  remove(id: number) {
    return `This action removes a #${id} staff`;
  }
}
