import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { PizzaService } from './pizza.service'
import { CreatePizzaDto, QueryArg } from './dto/create-pizza.dto'
import { UpdatePizzaDto } from './dto/update-pizza.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { PizzaEntity } from './entities/pizza.entity'

@Controller('pizzas')
@ApiTags('pizzas')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Post()
  create(@Body() createPizzaDto: CreatePizzaDto) {
    return this.pizzaService.create(createPizzaDto)
  }

  @ApiOkResponse({
    type: [PizzaEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.pizzaService.findByIds(id)
    } else {
      return this.pizzaService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePizzaDto: UpdatePizzaDto) {
    return this.pizzaService.update(+id, updatePizzaDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzaService.remove(+id)
  }
}
