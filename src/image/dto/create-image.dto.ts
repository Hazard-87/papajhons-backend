import { ApiProperty } from '@nestjs/swagger'

export class CreateImageDto {
  @ApiProperty()
  typeId: number

  @ApiProperty()
  url: string

  @ApiProperty()
  pizzaId: number
}

export class QueryArg {
  @ApiProperty({ required: false, type: Number, isArray: true })
  id: number | number[]

  @ApiProperty({ required: false, type: Number, isArray: true })
  typeId: number | number[]

  @ApiProperty({ required: false, type: Number, isArray: true })
  pizzaId: number | number[]

  @ApiProperty({
    required: false,
    oneOf: [{ type: 'number' }, { type: 'all' }]
  })
  limit: number

  @ApiProperty({ required: false })
  offset: number
}
