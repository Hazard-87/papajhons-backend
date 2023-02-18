import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { JoyImagesService } from './joy-images.service'
import { CreateJoyImageDto, QueryArg } from './dto/create-joy-image.dto'
import { UpdateJoyImageDto } from './dto/update-joy-image.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { JoyImageEntity } from './entities/joy-image.entity'

@Controller('joyImages')
@ApiTags('joyImages')
export class JoyImagesController {
  constructor(private readonly joyImagesService: JoyImagesService) {}

  @Post()
  create(@Body() createJoyImageDto: CreateJoyImageDto) {
    return this.joyImagesService.create(createJoyImageDto)
  }

  @ApiOkResponse({
    type: [JoyImageEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.joyImagesService.findByIds(id)
    } else {
      return this.joyImagesService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJoyImageDto: UpdateJoyImageDto) {
    return this.joyImagesService.update(+id, updateJoyImageDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.joyImagesService.remove(+id)
  }
}
