import { Injectable } from '@nestjs/common'
import { CreateSnackDto } from './dto/create-snack.dto'
import { UpdateSnackDto } from './dto/update-snack.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Brackets, Repository } from 'typeorm'
import { SnackEntity } from './entities/snack.entity'

@Injectable()
export class SnacksService {
  constructor(
    @InjectRepository(SnackEntity)
    private repository: Repository<SnackEntity>
  ) {}

  create(dto: CreateSnackDto) {
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
      .createQueryBuilder('snack')
      .leftJoinAndSelect('snack.sizes', 'snackSize')
      .leftJoinAndSelect('snack.images', 'snackImage')
      .where(':id <@ (snack.categoryIDs)', { id: categoryIDs })
      .orderBy('snack.id', query.order || 'ASC')

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

  update(id: number, dto: UpdateSnackDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
