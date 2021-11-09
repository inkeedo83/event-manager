import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, OneToMany } from 'typeorm';
import { AbstractBaseEntity } from '../../../common/base/base.entity';
import { EventEntity } from '../../events/entities/event.entity';
import { LocationInterface } from '../interfaces/location.interface';

@Entity({ name: 'locations' })
export class LocationEntity
  extends AbstractBaseEntity
  implements LocationInterface
{
  @ApiProperty({ type: String, default: 'address' })
  @Column()
  location: string;

  @ApiProperty({ type: String, default: 'description' })
  @Column()
  description: string;

  @OneToMany(() => EventEntity, (event: EventEntity) => event.location)
  events: EventEntity[];
}
