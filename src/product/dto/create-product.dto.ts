import { ApiProperty } from '@nestjs/swagger'

export class CreateProductDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  image: string
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
