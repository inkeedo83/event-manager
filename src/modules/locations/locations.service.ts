import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { BaseService } from '../../common/base/base.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationEntity } from './entities/location.entity';

@Injectable()
export class LocationsService extends BaseService<LocationEntity> {
  constructor(
    @InjectRepository(LocationEntity)
    private readonly locationsRepository: Repository<LocationEntity>,
  ) {
    super(locationsRepository);
  }

  async create(createLocationDto: CreateLocationDto): Promise<LocationEntity> {
    const location = this.locationsRepository.create(createLocationDto);

    return await this.locationsRepository.save(location);
  }
  async update(
    id: number,
    updateLocationDto: UpdateLocationDto,
  ): Promise<UpdateResult> {
    return await this.locationsRepository.update(id, updateLocationDto);
  }

  async getOne(id: number): Promise<LocationEntity> {
    return await this.locationsRepository.findOne(id, {
      relations: ['location'],
    });
  }
  async getAll(): Promise<LocationEntity[]> {
    return await this.locationsRepository.find({ relations: ['events'] });
  }
}
