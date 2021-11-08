import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { globalNotFoundException } from '../../common/exceptions/not-found-exception';
import { UserEntity } from './entities/user.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createOne(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async getAll(): Promise<UserEntity[]> {
    return await this.usersService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
    const user = await this.usersService.getOne(id);

    if (!user) throw new globalNotFoundException(id);

    return user;
  }

  @Patch(':id')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    const user = await this.usersService.getOne(id);

    if (!user) throw new globalNotFoundException(id);

    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async removeOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DeleteResult> {
    const user = await this.usersService.getOne(id);

    if (!user) throw new globalNotFoundException(id);

    return await this.usersService.deleteOne(id);
  }
}
