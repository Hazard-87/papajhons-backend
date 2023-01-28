import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreatePizzaSizeDto } from './dto/create-pizza-size.dto'
import { UpdatePizzaSizeDto } from './dto/update-pizza-size.dto'
import { PizzaSizeEntity } from './entities/pizza-size.entity'
import { Brackets, Repository } from 'typeorm'

@Injectable()
export class PizzaSizeService {
  constructor(
    @InjectRepository(PizzaSizeEntity)
    private repository: Repository<PizzaSizeEntity>
  ) {}

  create(dto: CreatePizzaSizeDto) {
    return this.repository.save(dto)
  }

  findByIds(id) {
    return this.repository.findByIds(id)
  }

  async findAll(query) {
    const qb = this.repository.createQueryBuilder('pizzaSizes')
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

  update(id: number, dto: UpdatePizzaSizeDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
