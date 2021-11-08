import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator';
import { LocationEntity } from '../../locations/entities/location.entity';
import { CreateEventInterface } from '../interfaces/event.interface';

export class CreateEventDto implements CreateEventInterface {
  @ApiProperty({ type: String, default: 'title' })
  @IsString()
  title: string;

  @ApiProperty({ type: String, default: 'description' })
  @IsString()
  description: string;

  @ApiProperty({
    type: LocationEntity,
    default: 1,
    description: 'location id',
  })
  @IsOptional()
  @IsNumber()
  location: LocationEntity;
  @ApiProperty({
    type: Date,
    default: new Date(),
    description: 'events start date',
  })
  @IsDateString()
  startTime: Date;
  @ApiProperty({
    type: Date,
    default: new Date(),
    description: 'events end date',
  })
  @IsDateString()
  endTime: Date;
}
