import { ApiProperty } from '@nestjs/swagger'

export class CreateDessertImageDto {
  @ApiProperty()
  sizeId: number | null

  @ApiProperty()
  url: string

  @ApiProperty()
  dessertId: number
}

export class QueryArg {
  @ApiProperty({ required: false, type: Number, isArray: true })
  id: number | number[]

  @ApiProperty({ required: false, type: Number, isArray: true })
  sizeId: number | number[]

  @ApiProperty({ required: false, type: Number, isArray: true })
  dessertId: number | number[]

  @ApiProperty({
    required: false,
    oneOf: [{ type: 'number' }, { type: 'all' }]
  })
  limit: number

  @ApiProperty({ required: false })
  offset: number
}
