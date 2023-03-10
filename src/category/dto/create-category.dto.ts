import { Type } from 'class-transformer'
import { IsArray, IsNumber, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateCategoryDto {
  @ApiProperty()
  name: string
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

export class BasicFiltersDTO {
  @IsArray()
  @IsOptional()
  @IsNumber({}, { each: true })
  @Type(() => Number)
  id?: Array<number>
}
