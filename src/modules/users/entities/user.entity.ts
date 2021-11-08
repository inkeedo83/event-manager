import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column } from 'typeorm';
import { AbstractBaseEntity } from '../../../common/base/base.entity';
import { UserInterface } from '../interfaces/user.interface';

@Entity({ name: 'users' })
export class UserEntity extends AbstractBaseEntity implements UserInterface {
  @ApiProperty({ example: 'first name' })
  @Column({ type: String, nullable: false })
  firstName: string;
  @ApiProperty({ example: 'last name' })
  @Column({ type: String, nullable: false })
  lastName: string;
  @ApiProperty({ example: 'user@mail.ru' })
  @Column({ type: String, unique: true, nullable: false })
  email: string;
  @ApiProperty({ example: true })
  @Column({ type: Boolean, default: true, nullable: false })
  isActive: boolean;
}
