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
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { globalNotFoundException } from '../../common/exceptions/not-found-exception';
import { EventEntity } from './entities/event.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto): Promise<EventEntity> {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  async getAll(): Promise<EventEntity[]> {
    return this.eventsService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<EventEntity> {
    const event = await this.eventsService.getOne(id);

    if (!event) throw new globalNotFoundException(id);

    return event;
  }

  @Patch(':id')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEventDto: UpdateEventDto,
  ): Promise<UpdateResult> {
    const event = await this.eventsService.getOne(id);

    if (!event) throw new globalNotFoundException(id);

    return this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    const event = await this.eventsService.getOne(id);

    if (!event) throw new globalNotFoundException(id);

    return this.eventsService.deleteOne(id);
  }
}
