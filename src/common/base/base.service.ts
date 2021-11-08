import { BadGatewayException } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { AbstractBaseEntity } from './base.entity';
import { BaseServiceInterface } from './base.service.interface';

export abstract class BaseService<T extends AbstractBaseEntity>
  implements BaseServiceInterface<T>
{
  constructor(private readonly repository: Repository<T>) {}
  async getAll(): Promise<T[]> {
    try {
      return await (<Promise<T[]>>this.repository.find());
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async getOne(id: number): Promise<T> {
    try {
      return await (<Promise<T>>this.repository.findOne(id));
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async deleteOne(id: number): Promise<DeleteResult> {
    try {
      return this.repository.delete(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
