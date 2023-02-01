import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreatePizzaDto } from './dto/create-pizza.dto'
import { UpdatePizzaDto } from './dto/update-pizza.dto'
import { PizzaEntity } from './entities/pizza.entity'
import { Brackets, Repository } from 'typeorm'

@Injectable()
export class PizzaService {
  constructor(
    @InjectRepository(PizzaEntity)
    private repository: Repository<PizzaEntity>
  ) {}

  create(dto: CreatePizzaDto) {
    return this.repository.save(dto)
  }

  findByIds(id) {
    return this.repository.findByIds(id)
  }

  async findAll(query) {
    const limit = 10
    const categoryIDs = [...query.categoryID]

    const qb = this.repository
      .createQueryBuilder('pizza')
      .leftJoinAndSelect('pizza.sizes', 'pizzaSizes')
      .leftJoinAndSelect('pizza.image', 'image')
      .where(':id <@ (pizza.categoryIDs)', { id: categoryIDs })
      .orderBy('pizza.id', query.order || 'ASC')

    if (!query.limit) {
      qb.take(limit)
    } else if (query.limit !== 'all') {
      qb.take(+query.limit || limit)
    }
    qb.skip(+query.offset || 0)

    delete query.limit
    delete query.offset
    delete query.order
    delete query.categoryID

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

    qb.andWhere(params).andWhere(
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

  update(id: number, dto: UpdatePizzaDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
