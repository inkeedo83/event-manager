import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export abstract class AbstractBaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'id', example: 1 })
  public id: number;

  @CreateDateColumn()
  @ApiProperty({ description: 'creation timestamp' })
  created_at: Date;

  @UpdateDateColumn()
  @ApiProperty({ description: 'update timestamp' })
  updated_at: Date;
}
