import { Injectable } from '@nestjs/common'
import { CreateSnackSizeDto } from './dto/create-snack-size.dto'
import { UpdateSnackSizeDto } from './dto/update-snack-size.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Brackets, Repository } from 'typeorm'
import { SnackSizeEntity } from './entities/snack-size.entity'

@Injectable()
export class SnackSizesService {
  constructor(
    @InjectRepository(SnackSizeEntity)
    private repository: Repository<SnackSizeEntity>
  ) {}

  create(dto: CreateSnackSizeDto) {
    return this.repository.save(dto)
  }

  findByIds(id) {
    return this.repository.findByIds(id)
  }

  async findAll(query) {
    const qb = this.repository.createQueryBuilder('snackSize')
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

  update(id: number, dto: UpdateSnackSizeDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
