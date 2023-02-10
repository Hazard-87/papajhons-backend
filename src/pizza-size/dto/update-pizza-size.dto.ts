import { PartialType } from '@nestjs/mapped-types'
import { CreatePizzaSizeDto } from './create-pizza-size.dto'
import { ApiProperty } from '@nestjs/swagger'

export class UpdatePizzaSizeDto extends PartialType(CreatePizzaSizeDto) {
  @ApiProperty()
  pizzaID: number

  @ApiProperty()
  typeId: number

  @ApiProperty()
  size: number

  @ApiProperty()
  unit: string

  @ApiProperty()
  isBorder: boolean
}
