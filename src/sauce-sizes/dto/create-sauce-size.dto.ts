import { ApiProperty } from '@nestjs/swagger'

export class CreateSauceSizeDto {
  @ApiProperty()
  sauceId: number

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
    oneOf: [{ type: 'number' }, { type: 'all' }]
  })
  limit: number

  @ApiProperty({ required: false })
  offset: number
}
