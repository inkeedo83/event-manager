import { NotFoundException } from '@nestjs/common';

export class globalNotFoundException extends NotFoundException {
  constructor(id: number) {
    super(`id ${id} not found.`);
  }
}
