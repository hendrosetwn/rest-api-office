import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { UsersModule } from './users/users.module';
import { AddressModule } from './address/address.module';
import { StaffModule } from './staff/staff.module';
import { OfficeModule } from './office/office.module';

@Module({
  imports: [PrismaModule, UsersModule, AddressModule, StaffModule, OfficeModule],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
