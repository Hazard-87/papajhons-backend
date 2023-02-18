import { Injectable } from '@nestjs/common'
import { CreateJoyDto } from './dto/create-joy.dto'
import { UpdateJoyDto } from './dto/update-joy.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Brackets, Repository } from 'typeorm'
import { JoyEntity } from './entities/joy.entity'

@Injectable()
export class JoysService {
  constructor(
    @InjectRepository(JoyEntity)
    private repository: Repository<JoyEntity>
  ) {}

  create(dto: CreateJoyDto) {
    return this.repository.save(dto)
  }

  findByIds(id) {
    return this.repository.findByIds(id, {
      relations: ['images']
    })
  }

  async findAll(query) {
    const limit = 10

    const qb = this.repository
      .createQueryBuilder('joy')
      .leftJoinAndSelect('joy.images', 'joyImage')
      .orderBy('joy.id', query.order || 'ASC')

    if (!query.limit) {
      qb.take(limit)
    } else if (query.limit !== 'all') {
      qb.take(+query.limit || limit)
    }
    qb.skip(+query.offset || 0)

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

  update(id: number, dto: UpdateJoyDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
