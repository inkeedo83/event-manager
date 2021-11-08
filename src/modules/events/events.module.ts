import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './entities/event.entity';
import { LocationEntity } from '../locations/entities/location.entity';
import { LocationsModule } from '../locations/locations.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventEntity, LocationEntity]),
    LocationsModule,
  ],

  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
