import { PartialType } from '@nestjs/mapped-types'
import { CreatePizzaDto } from './create-pizza.dto'
import { ApiProperty } from '@nestjs/swagger'

export class UpdatePizzaDto extends PartialType(CreatePizzaDto) {
  @ApiProperty()
  name: string

  @ApiProperty()
  description: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  productID: number

  @ApiProperty({ type: [Number] })
  categoryIDs: number[]

  @ApiProperty()
  imageId: number

  @ApiProperty()
  unit: string

  @ApiProperty()
  price: number
}
