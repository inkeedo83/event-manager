import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractBaseEntity } from '../../../common/base/base.entity';
import { LocationEntity } from '../../locations/entities/location.entity';
import { EventInterface } from '../interfaces/event.interface';

@Entity({ name: 'events' })
export class EventEntity extends AbstractBaseEntity implements EventInterface {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;
  @ManyToOne(
    () => LocationEntity,
    (location: LocationEntity) => location.events,
  )
  location: LocationEntity;
}
