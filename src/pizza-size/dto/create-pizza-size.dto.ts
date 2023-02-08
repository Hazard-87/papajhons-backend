import { ApiProperty } from '@nestjs/swagger'

export class CreatePizzaSizeDto {
  @ApiProperty()
  pizzaID: number

  @ApiProperty()
  type: string

  @ApiProperty()
  size: number

  @ApiProperty()
  isBorder: boolean
}

export class QueryArg {
  @ApiProperty({ required: false, type: Number, isArray: true })
  id: number | number[]

  @ApiProperty({
    required: false,
    default: 10,
    oneOf: [{ type: 'number' }, { type: 'all' }]
  })
  limit?: number

  @ApiProperty({ required: false, default: 0 })
  offset?: number
}
