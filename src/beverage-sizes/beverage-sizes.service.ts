import { Injectable } from '@nestjs/common'
import { CreateBeverageSizeDto } from './dto/create-beverage-size.dto'
import { UpdateBeverageSizeDto } from './dto/update-beverage-size.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Brackets, Repository } from 'typeorm'
import { BeverageSizeEntity } from './entities/beverage-size.entity'

@Injectable()
export class BeverageSizesService {
  constructor(
    @InjectRepository(BeverageSizeEntity)
    private repository: Repository<BeverageSizeEntity>
  ) {}

  create(dto: CreateBeverageSizeDto) {
    return this.repository.save(dto)
  }

  findByIds(id) {
    return this.repository.findByIds(id)
  }

  async findAll(query) {
    const qb = this.repository.createQueryBuilder('beverageSize')
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

  update(id: number, dto: UpdateBeverageSizeDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
