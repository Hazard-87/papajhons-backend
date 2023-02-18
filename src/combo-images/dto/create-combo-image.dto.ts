import { ApiProperty } from '@nestjs/swagger'

export class CreateComboImageDto {
  @ApiProperty()
  typeId: number

  @ApiProperty()
  url: string

  @ApiProperty()
  comboId: number
}

export class QueryArg {
  @ApiProperty({ required: false, type: Number, isArray: true })
  id: number | number[]

  @ApiProperty({ required: false, type: Number, isArray: true })
  typeId: number | number[]

  @ApiProperty({ required: false, type: Number, isArray: true })
  comboId: number | number[]

  @ApiProperty({
    required: false,
    oneOf: [{ type: 'number' }, { type: 'all' }]
  })
  limit: number

  @ApiProperty({ required: false })
  offset: number
}
