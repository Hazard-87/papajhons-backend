import { PartialType } from '@nestjs/mapped-types'
import { CreateImageDto } from './create-image.dto'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateImageDto extends PartialType(CreateImageDto) {
  @ApiProperty()
  typeId: number

  @ApiProperty()
  url: string

  @ApiProperty()
  pizzaId: number
}
