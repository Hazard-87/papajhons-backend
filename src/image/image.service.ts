import { Injectable } from '@nestjs/common'
import { CreateImageDto } from './dto/create-image.dto'
import { UpdateImageDto } from './dto/update-image.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Brackets, Repository } from 'typeorm'
import { ImageEntity } from './entities/image.entity'

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(ImageEntity)
    private repository: Repository<ImageEntity>
  ) {}

  create(dto: CreateImageDto) {
    return this.repository.save(dto)
  }

  findByIds(id) {
    return this.repository.findByIds(id)
  }

  async findAll(query) {
    const limit = query.limit || 10

    if (query.pizzaId) {
      query.pizza = query.pizzaId
    }

    const qb = this.repository.createQueryBuilder('image').orderBy('image.id', query.order || 'ASC')

    if (!isNaN(+limit)) {
      qb.take(+limit)
    }
    qb.skip(+query.offset || 0)

    delete query.limit
    delete query.offset
    delete query.order
    delete query.pizzaId

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

    qb.where(
      new Brackets((qb) => {
        params.forEach((item, idx) => {
          if (idx === 0) {
            qb.where(item)
          } else {
            qb.andWhere(item)
          }
        })
      })
    ).andWhere(
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

  update(id: number, dto: UpdateImageDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
