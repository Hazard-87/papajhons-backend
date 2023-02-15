import { Injectable } from '@nestjs/common'
import { CreateDessertSizeDto } from './dto/create-dessert-size.dto'
import { UpdateDessertSizeDto } from './dto/update-dessert-size.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Brackets, Repository } from 'typeorm'
import { DessertSizeEntity } from './entities/dessert-size.entity'

@Injectable()
export class DessertSizesService {
  constructor(
    @InjectRepository(DessertSizeEntity)
    private repository: Repository<DessertSizeEntity>
  ) {}

  create(dto: CreateDessertSizeDto) {
    return this.repository.save(dto)
  }

  findByIds(id) {
    return this.repository.findByIds(id)
  }

  async findAll(query) {
    const qb = this.repository.createQueryBuilder('dessertSize')
    qb.orderBy('id', 'ASC')
    qb.limit(+query.limit || 10)
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

  update(id: number, dto: UpdateDessertSizeDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
