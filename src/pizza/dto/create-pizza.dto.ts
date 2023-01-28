import { Type } from 'class-transformer'
import { IsArray, IsNumber, IsOptional } from 'class-validator'

export class CreatePizzaDto {
  name: string
  description: string
  image: string
  createdAt: Date
  productID: number
  categoryID: number
  pizzaTypeIDs: number[]
  pizzaSizeIDs: number[]
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
