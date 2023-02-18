import { ApiProperty } from '@nestjs/swagger'

export class CreateJoyDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  description: string

  @ApiProperty()
  productID: number

  @ApiProperty({ type: [Number] })
  imageIds: number[]

  @ApiProperty()
  price: number
}

export class QueryArg {
  @ApiProperty({ required: false, type: Number, isArray: true })
  id: number | number[]

  @ApiProperty({
    required: false,
    oneOf: [{ type: 'number' }, { type: 'all' }]
  })
  limit: number

  @ApiProperty({ required: false })
  offset: number
}
