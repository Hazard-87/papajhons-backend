import { Injectable } from '@nestjs/common'
import { CreateHotterDto } from './dto/create-hotter.dto'
import { UpdateHotterDto } from './dto/update-hotter.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Brackets, Repository } from 'typeorm'
import { HotterEntity } from './entities/hotter.entity'

@Injectable()
export class HottersService {
  constructor(
    @InjectRepository(HotterEntity)
    private repository: Repository<HotterEntity>
  ) {}

  create(dto: CreateHotterDto) {
    return this.repository.save(dto)
  }

  findByIds(id) {
    return this.repository.findByIds(id, {
      relations: ['images']
    })
  }

  async findAll(query) {
    const limit = 10
    const categoryIDs = query.categoryID ? [...query.categoryID] : []

    const qb = this.repository
      .createQueryBuilder('hotter')
      .leftJoinAndSelect('hotter.images', 'hotterImage')
      .where(':id <@ (hotter.categoryIDs)', { id: categoryIDs })
      .orderBy('hotter.id', query.order || 'ASC')

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

  update(id: number, dto: UpdateHotterDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
