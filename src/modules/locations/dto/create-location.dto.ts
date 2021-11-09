import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateLocationInterface } from '../interfaces/location.interface';

export class CreateLocationDto implements CreateLocationInterface {
  @ApiProperty({ type: String, default: 'address' })
  @IsString()
  location: string;

  @ApiProperty({ type: String, default: 'description' })
  @IsString()
  description: string;
}
