import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { LocationEntity } from '../../locations/entities/location.entity';
import { UpdateEventInterface } from '../interfaces/event.interface';

export class UpdateEventDto implements UpdateEventInterface {
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
  @IsNumber()
  location: LocationEntity;
}
