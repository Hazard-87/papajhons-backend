import { ApiProperty } from '@nestjs/swagger'

export class CreateSauceDto {
  @ApiProperty()
  name: string

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
    oneOf: [{ type: 'number' }, { type: 'all' }]
  })
  limit: number

  @ApiProperty({ required: false })
  offset: number
}
