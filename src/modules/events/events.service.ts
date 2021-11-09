import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  LessThanOrEqual,
  MoreThanOrEqual,
  Not,
  IsNull,
  Repository,
  UpdateResult,
} from 'typeorm';
import { BaseService } from '../../common/base/base.service';
import { LocationEntity } from '../locations/entities/location.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { GetQueryDto } from './dto/get-query.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventEntity } from './entities/event.entity';

@Injectable()
export class EventsService extends BaseService<EventEntity> {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
    @InjectRepository(LocationEntity)
    private readonly repo: Repository<LocationEntity>,
  ) {
    super(eventRepository);
  }

  async getAll(): Promise<EventEntity[]> {
    return await this.eventRepository.find({ relations: ['location'] });
  }

  async getAllQuery(getQueryDto: GetQueryDto): Promise<EventEntity[]> {
    const query = {
      startTime:
        getQueryDto.start !== '0'
          ? MoreThanOrEqual(getQueryDto.start)
          : Not(IsNull()),
      endTime:
        getQueryDto.end !== '0'
          ? LessThanOrEqual(getQueryDto.end)
          : Not(IsNull()),
      location: getQueryDto.location === '0' ? Not(IsNull()) : location,
    };

    return await this.eventRepository.find({
      where: query,
      relations: ['location'],
    });
  }

  async getOne(id: number): Promise<EventEntity> {
    return await this.eventRepository.findOne(id, { relations: ['location'] });
  }
  async create(createEventDto: CreateEventDto): Promise<EventEntity> {
    const event = this.eventRepository.create(createEventDto);

    return await this.eventRepository.save(event);
  }

  async update(
    id: number,
    updateEventDto: UpdateEventDto,
  ): Promise<UpdateResult> {
    const idd = updateEventDto.location as unknown as number;

    const location = await this.repo.findOne(idd);

    if (location) return await this.eventRepository.update(id, updateEventDto);

    throw new HttpException('location id not found', HttpStatus.NOT_FOUND);
  }
}
