import { ApiProperty } from '@nestjs/swagger'

export class CreateSnackImageDto {
  @ApiProperty()
  sizeId: number | null

  @ApiProperty()
  url: string

  @ApiProperty()
  snackId: number
}

export class QueryArg {
  @ApiProperty({ required: false, type: Number, isArray: true })
  id: number | number[]

  @ApiProperty({ required: false, type: Number, isArray: true })
  sizeId: number | number[]

  @ApiProperty({ required: false, type: Number, isArray: true })
  snackId: number | number[]

  @ApiProperty({
    required: false,
    oneOf: [{ type: 'number' }, { type: 'all' }]
  })
  limit: number

  @ApiProperty({ required: false })
  offset: number
}
