import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';
import { UpdateLocationInterface } from '../interfaces/location.interface';

export class UpdateLocationDto implements UpdateLocationInterface {
  @ApiProperty({ type: String, default: 'address' })
  @IsOptional()
  @IsString()
  location: string;
  @ApiProperty({ type: String, default: 'description' })
  @IsOptional()
  @IsString()
  description: string;
}
