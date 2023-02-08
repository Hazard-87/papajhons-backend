import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ImageService } from './image.service'
import { CreateImageDto } from './dto/create-image.dto'
import { UpdateImageDto } from './dto/update-image.dto'
import { ApiOkResponse } from '@nestjs/swagger'
import { ImageEntity } from './entities/image.entity'

@Controller('image')
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
  findAll() {
    return this.imageService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(+id)
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
