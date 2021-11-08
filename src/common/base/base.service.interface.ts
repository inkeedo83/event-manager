import { DeleteResult } from 'typeorm';

export interface BaseServiceInterface<T> {
  getAll(): Promise<T[]>;
  getOne(id: number): Promise<T>;
  deleteOne(id: number): Promise<DeleteResult>;
}
