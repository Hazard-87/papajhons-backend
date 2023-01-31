import { Type } from 'class-transformer'
import { IsArray, IsNumber, IsOptional } from 'class-validator'

export class CreatePizzaDto {
  name: string
  description: string
  createdAt: Date
  productID: number
  categoryIDs: number[]
  imageID: number
  unit: string
  price: number
}

export class QueryArg {
  id: string | string[]
  limit?: string
  offset?: string
}

export class BasicFiltersDTO {
  @IsArray()
  @IsOptional()
  @IsNumber({}, { each: true })
  @Type(() => Number)
  id?: Array<number>
}
