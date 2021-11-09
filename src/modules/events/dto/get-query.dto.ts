import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class GetQueryDto {
  @ApiProperty({ default: new Date() })
  @IsOptional()
  start: string;
  @ApiProperty({ default: new Date() })
  @IsOptional()
  end: string;

  @ApiProperty()
  @IsOptional()
  location: string;
}
