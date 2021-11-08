import { EventEntity } from '../../events/entities/event.entity';

export interface LocationInterface {
  id: number;
  location: string;
  description: string;
  events: EventEntity[];
  created_at: Date;
  updated_at: Date;
}

export interface CreateLocationInterface extends Partial<LocationInterface> {
  location: string;
  description: string;
}

export interface UpdateLocationInterface extends Partial<LocationInterface> {
  location: string;
  description: string;
}
