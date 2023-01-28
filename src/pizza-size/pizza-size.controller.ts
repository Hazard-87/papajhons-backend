import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { PizzaSizeService } from './pizza-size.service'
import { CreatePizzaSizeDto } from './dto/create-pizza-size.dto'
import { UpdatePizzaSizeDto } from './dto/update-pizza-size.dto'
import { QueryArg } from '../pizza/dto/create-pizza.dto'

@Controller('pizzaSizes')
export class PizzaSizeController {
  constructor(private readonly pizzaSizeService: PizzaSizeService) {}

  @Post()
  create(@Body() createPizzaSizeDto: CreatePizzaSizeDto) {
    return this.pizzaSizeService.create(createPizzaSizeDto)
  }

  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.pizzaSizeService.findByIds(id)
    } else {
      return this.pizzaSizeService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePizzaSizeDto: UpdatePizzaSizeDto) {
    return this.pizzaSizeService.update(+id, updatePizzaSizeDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzaSizeService.remove(+id)
  }
}
