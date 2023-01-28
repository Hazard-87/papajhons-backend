import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreatePizzaTypeDto } from './dto/create-pizza-type.dto'
import { UpdatePizzaTypeDto } from './dto/update-pizza-type.dto'
import { PizzaTypeEntity } from './entities/pizza-type.entity'
import { Brackets, Repository } from 'typeorm'

@Injectable()
export class PizzaTypeService {
  constructor(
    @InjectRepository(PizzaTypeEntity)
    private repository: Repository<PizzaTypeEntity>
  ) {}

  create(dto: CreatePizzaTypeDto) {
    return this.repository.save(dto)
  }

  findByIds(id) {
    return this.repository.findByIds(id)
  }

  async findAll(query) {
    const qb = this.repository.createQueryBuilder('pizzaTypes')
    qb.orderBy('id', 'ASC')
    qb.limit(+query.limit || 2)
    qb.offset(+query.offset || 0)
    qb.orderBy('id', query.order || 'ASC')
    delete query.limit
    delete query.offset
    delete query.order

    const items = []
    const params = []
    const keys = Object.keys(query)
    keys.forEach((key) => {
      if (Array.isArray(query[key])) {
        query[key].forEach((item) => {
          items.push({ [key]: item })
        })
      } else {
        params.push({ [key]: query[key] })
      }
    })

    qb.where(params).andWhere(
      new Brackets((qb) => {
        items.forEach((item, idx) => {
          if (idx === 0) {
            qb.where(item)
          } else {
            qb.orWhere(item)
          }
        })
      })
    )

    const [result, total] = await qb.getManyAndCount()

    return {
      result,
      total
    }
  }

  update(id: number, dto: UpdatePizzaTypeDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
