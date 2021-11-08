import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsBoolean, IsOptional } from 'class-validator';
import { UpdateUserInterface } from '../interfaces/user.interface';

export class UpdateUserDto implements UpdateUserInterface {
  @ApiProperty({ type: String, default: 'first name' })
  @IsOptional()
  @IsString()
  firstName: string;
  @ApiProperty({ type: String, default: 'last name' })
  @IsOptional()
  @IsString()
  lastName: string;
  @ApiProperty({ type: String, default: 'user@mail.ru' })
  @IsOptional()
  @IsEmail()
  email: string;
  @ApiProperty({ type: Boolean, default: true })
  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
