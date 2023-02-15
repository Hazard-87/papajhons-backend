import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { BeverageImagesService } from './beverage-images.service'
import { CreateBeverageImageDto, QueryArg } from './dto/create-beverage-image.dto'
import { UpdateBeverageImageDto } from './dto/update-beverage-image.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { BeverageImageEntity } from './entities/beverage-image.entity'

@Controller('beverageImages')
@ApiTags('beverageImages')
export class BeverageImagesController {
  constructor(private readonly beverageImagesService: BeverageImagesService) {}

  @Post()
  create(@Body() createBeverageImageDto: CreateBeverageImageDto) {
    return this.beverageImagesService.create(createBeverageImageDto)
  }

  @ApiOkResponse({
    type: [BeverageImageEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.beverageImagesService.findByIds(id)
    } else {
      return this.beverageImagesService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeverageImageDto: UpdateBeverageImageDto) {
    return this.beverageImagesService.update(+id, updateBeverageImageDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beverageImagesService.remove(+id)
  }
}
