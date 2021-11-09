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
import { LocationsService } from './locations.service';
import { globalNotFoundException } from '../../common/exceptions/not-found-exception';
import { DeleteResult, UpdateResult } from 'typeorm';
import { LocationEntity } from './entities/location.entity';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  async getAll(): Promise<LocationEntity[]> {
    return await this.locationsService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<LocationEntity> {
    const location = await this.locationsService.getOne(id);

    if (!location) throw new globalNotFoundException(id);

    return location;
  }

  @Post()
  async create(
    @Body() createLocationDto: CreateLocationDto,
  ): Promise<LocationEntity> {
    return await this.locationsService.create(createLocationDto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLocationDto: UpdateLocationDto,
  ): Promise<UpdateResult> {
    const location = await this.locationsService.getOne(id);

    if (!location) throw new globalNotFoundException(id);

    return await this.locationsService.update(id, updateLocationDto);
  }

  @Delete(':id')
  async removeOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DeleteResult> {
    const location = await this.locationsService.getOne(id);

    if (!location) throw new globalNotFoundException(id);

    return await this.locationsService.deleteOne(id);
  }
}
