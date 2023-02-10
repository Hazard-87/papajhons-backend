import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { ImageService } from './image.service'
import { CreateImageDto, QueryArg } from './dto/create-image.dto'
import { UpdateImageDto } from './dto/update-image.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { ImageEntity } from './entities/image.entity'

@Controller('images')
@ApiTags('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.imageService.create(createImageDto)
  }

  @ApiOkResponse({
    type: [ImageEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.imageService.findByIds(id)
    } else {
      return this.imageService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imageService.update(+id, updateImageDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(+id)
  }
}
