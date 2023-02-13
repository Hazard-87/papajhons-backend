import { Injectable } from '@nestjs/common'
import { CreateBeverageDto } from './dto/create-beverage.dto'
import { UpdateBeverageDto } from './dto/update-beverage.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Brackets, Repository } from 'typeorm'
import { BeverageEntity } from './entities/beverage.entity'

@Injectable()
export class BeveragesService {
  constructor(
    @InjectRepository(BeverageEntity)
    private repository: Repository<BeverageEntity>
  ) {}

  create(dto: CreateBeverageDto) {
    return this.repository.save(dto)
  }

  findByIds(id) {
    return this.repository.findByIds(id, {
      relations: ['sizes', 'images']
    })
  }

  async findAll(query) {
    const limit = 10
    const categoryIDs = query.categoryID ? [...query.categoryID] : []

    const qb = this.repository
      .createQueryBuilder('beverage')
      .leftJoinAndSelect('beverage.sizes', 'beverageSize')
      .leftJoinAndSelect('beverage.images', 'beverageImage')
      .where(':id <@ (beverage.categoryIDs)', { id: categoryIDs })
      .orderBy('beverage.id', query.order || 'ASC')

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

  update(id: number, dto: UpdateBeverageDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
