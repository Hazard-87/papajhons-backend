import { ApiProperty } from '@nestjs/swagger'

export class CreateBeverageSizeDto {
  @ApiProperty()
  beverageId: number

  @ApiProperty()
  size: number

  @ApiProperty()
  unit: string
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
