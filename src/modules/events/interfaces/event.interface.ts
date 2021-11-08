import { LocationEntity } from '../../locations/entities/location.entity';

export interface EventInterface {
  id: number;
  title: string;
  description: string;
  location: LocationEntity;
  startTime: Date;
  endTime: Date;
  created_at: Date;
  updated_at: Date;
}

export interface CreateEventInterface
  extends Pick<EventInterface, 'title' | 'description' | 'location'> {
  title: string;
  description: string;
  location: LocationEntity;
  startTime: Date;
  endTime: Date;
}

export interface UpdateEventInterface
  extends Pick<EventInterface, 'title' | 'description' | 'location'> {
  title: string;
  description: string;
  location: LocationEntity;
}
