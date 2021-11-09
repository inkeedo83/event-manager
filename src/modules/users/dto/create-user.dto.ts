import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { CreateUserInterface } from '../interfaces/user.interface';

export class CreateUserDto implements CreateUserInterface {
  @ApiProperty({ type: String, default: 'first name' })
  @IsString()
  firstName: string;

  @ApiProperty({ type: String, default: 'last name' })
  @IsString()
  lastName: string;

  @ApiProperty({ type: String, default: 'user@mail.ru' })
  @IsEmail()
  email: string;
}
