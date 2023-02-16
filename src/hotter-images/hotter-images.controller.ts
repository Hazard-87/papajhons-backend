import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { HotterImagesService } from './hotter-images.service'
import { CreateHotterImageDto, QueryArg } from './dto/create-hotter-image.dto'
import { UpdateHotterImageDto } from './dto/update-hotter-image.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { HotterImageEntity } from './entities/hotter-image.entity'

@Controller('hotterImages')
@ApiTags('hotterImages')
export class HotterImagesController {
  constructor(private readonly hotterImagesService: HotterImagesService) {}

  @Post()
  create(@Body() createHotterImageDto: CreateHotterImageDto) {
    return this.hotterImagesService.create(createHotterImageDto)
  }

  @ApiOkResponse({
    type: [HotterImageEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.hotterImagesService.findByIds(id)
    } else {
      return this.hotterImagesService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotterImageDto: UpdateHotterImageDto) {
    return this.hotterImagesService.update(+id, updateHotterImageDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotterImagesService.remove(+id)
  }
}
