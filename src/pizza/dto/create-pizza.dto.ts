import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNumber, IsOptional } from 'class-validator'

export class CreatePizzaDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  description: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  productID: number

  @ApiProperty({ type: [Number] })
  categoryIDs: number[]

  @ApiProperty()
  imageId: number

  @ApiProperty()
  price: number
}

export class QueryArg {
  @ApiProperty({ required: false, type: Number, isArray: true })
  id: number | number[]

  @ApiProperty({
    required: false,
    type: Number,
    isArray: true
  })
  categoryID: number

  @ApiProperty({
    required: false,
    default: 10,
    oneOf: [{ type: 'number' }, { type: 'all' }]
  })
  limit: number

  @ApiProperty({ required: false, default: 0 })
  offset: number
}

export class BasicFiltersDTO {
  @IsArray()
  @IsOptional()
  @IsNumber({}, { each: true })
  @Type(() => Number)
  id?: Array<number>
}
