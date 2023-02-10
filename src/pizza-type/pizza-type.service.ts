import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { PizzaTypeEntity } from './entities/pizza-type.entity'

@Injectable()
export class PizzaTypeService {
  constructor(
    @InjectRepository(PizzaTypeEntity)
    private repository: Repository<PizzaTypeEntity>
  ) {}

  findByIds(id) {
    return this.repository.findByIds(id)
  }

  async findAll(query) {
    const limit = query.limit || 10

    const qb = this.repository
      .createQueryBuilder('pizzaType')
      .orderBy('pizzaType.id', query.order || 'ASC')

    if (!isNaN(+limit)) {
      qb.take(+limit)
    }
    qb.skip(+query.offset || 0)

    delete query.limit
    delete query.offset
    delete query.order

    const [result, total] = await qb.getManyAndCount()

    return {
      result,
      total
    }
  }
}
