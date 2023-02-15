import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { DessertsService } from './desserts.service'
import { CreateDessertDto } from './dto/create-dessert.dto'
import { UpdateDessertDto } from './dto/update-dessert.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { QueryArg } from '../snacks/dto/create-snack.dto'
import { DessertEntity } from './entities/dessert.entity'

@Controller('desserts')
@ApiTags('desserts')
export class DessertsController {
  constructor(private readonly dessertsService: DessertsService) {}

  @Post()
  create(@Body() createDessertDto: CreateDessertDto) {
    return this.dessertsService.create(createDessertDto)
  }

  @ApiOkResponse({
    type: [DessertEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.dessertsService.findByIds(id)
    } else {
      return this.dessertsService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDessertDto: UpdateDessertDto) {
    return this.dessertsService.update(+id, updateDessertDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dessertsService.remove(+id)
  }
}
