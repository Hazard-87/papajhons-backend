import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { PizzaTypeService } from './pizza-type.service'
import { CreatePizzaTypeDto, QueryArg } from './dto/create-pizza-type.dto'
import { UpdatePizzaTypeDto } from './dto/update-pizza-type.dto'

@Controller('pizzaTypes')
export class PizzaTypeController {
  constructor(private readonly pizzaTypeService: PizzaTypeService) {}

  @Post()
  create(@Body() createPizzaTypeDto: CreatePizzaTypeDto) {
    return this.pizzaTypeService.create(createPizzaTypeDto)
  }

  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.pizzaTypeService.findByIds(id)
    } else {
      return this.pizzaTypeService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePizzaTypeDto: UpdatePizzaTypeDto) {
    return this.pizzaTypeService.update(+id, updatePizzaTypeDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzaTypeService.remove(+id)
  }
}
