import { Controller, Get, Query } from '@nestjs/common'
import { PizzaTypeService } from './pizza-type.service'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { PizzaTypeEntity, QueryArg } from './entities/pizza-type.entity'

@Controller('pizzaTypes')
@ApiTags('pizzaTypes')
export class PizzaTypeController {
  constructor(private readonly pizzaTypeService: PizzaTypeService) {}

  @ApiOkResponse({
    type: [PizzaTypeEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.pizzaTypeService.findByIds(id)
    } else {
      return this.pizzaTypeService.findAll(query)
    }
  }
}
