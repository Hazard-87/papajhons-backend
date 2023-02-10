import { Injectable } from '@nestjs/common'
import { CreateSnackImageDto } from './dto/create-snack-image.dto'
import { UpdateSnackImageDto } from './dto/update-snack-image.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Brackets, Repository } from 'typeorm'
import { SnackImageEntity } from './entities/snack-image.entity'

@Injectable()
export class SnackImagesService {
  constructor(
    @InjectRepository(SnackImageEntity)
    private repository: Repository<SnackImageEntity>
  ) {}

  create(dto: CreateSnackImageDto) {
    return this.repository.save(dto)
  }

  findByIds(id) {
    return this.repository.findByIds(id)
  }

  async findAll(query) {
    const limit = query.limit || 10

    if (query.snackId) {
      query.snack = query.snackId
    }

    const qb = this.repository
      .createQueryBuilder('snackImage')
      .orderBy('snackImage.id', query.order || 'ASC')

    if (!isNaN(+limit)) {
      qb.take(+limit)
    }
    qb.skip(+query.offset || 0)

    delete query.limit
    delete query.offset
    delete query.order
    delete query.snackId

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

  update(id: number, dto: UpdateSnackImageDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
