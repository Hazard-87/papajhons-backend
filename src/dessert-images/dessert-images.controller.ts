import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { DessertImagesService } from './dessert-images.service'
import { CreateDessertImageDto, QueryArg } from './dto/create-dessert-image.dto'
import { UpdateDessertImageDto } from './dto/update-dessert-image.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { DessertImageEntity } from './entities/dessert-image.entity'

@Controller('dessertImages')
@ApiTags('dessertImages')
export class DessertImagesController {
  constructor(private readonly dessertImagesService: DessertImagesService) {}

  @Post()
  create(@Body() createDessertImageDto: CreateDessertImageDto) {
    return this.dessertImagesService.create(createDessertImageDto)
  }

  @ApiOkResponse({
    type: [DessertImageEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.dessertImagesService.findByIds(id)
    } else {
      return this.dessertImagesService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDessertImageDto: UpdateDessertImageDto) {
    return this.dessertImagesService.update(+id, updateDessertImageDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dessertImagesService.remove(+id)
  }
}
