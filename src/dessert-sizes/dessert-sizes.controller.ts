import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { DessertSizesService } from './dessert-sizes.service'
import { CreateDessertSizeDto, QueryArg } from './dto/create-dessert-size.dto'
import { UpdateDessertSizeDto } from './dto/update-dessert-size.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { DessertSizeEntity } from './entities/dessert-size.entity'

@Controller('dessertSizes')
@ApiTags('dessertSizes')
export class DessertSizesController {
  constructor(private readonly dessertSizesService: DessertSizesService) {}

  @Post()
  create(@Body() createDessertSizeDto: CreateDessertSizeDto) {
    return this.dessertSizesService.create(createDessertSizeDto)
  }

  @ApiOkResponse({
    type: [DessertSizeEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.dessertSizesService.findByIds(id)
    } else {
      return this.dessertSizesService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDessertSizeDto: UpdateDessertSizeDto) {
    return this.dessertSizesService.update(+id, updateDessertSizeDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dessertSizesService.remove(+id)
  }
}
