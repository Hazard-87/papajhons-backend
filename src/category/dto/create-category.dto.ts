import { Type } from 'class-transformer'
import { IsArray, IsNumber, IsOptional } from 'class-validator'

export class CreateCategoryDto {
  name: string
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
