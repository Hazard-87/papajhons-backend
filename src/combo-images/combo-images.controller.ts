import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { ComboImagesService } from './combo-images.service'
import { CreateComboImageDto, QueryArg } from './dto/create-combo-image.dto'
import { UpdateComboImageDto } from './dto/update-combo-image.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { ComboImageEntity } from './entities/combo-image.entity'

@Controller('comboImages')
@ApiTags('comboImages')
export class ComboImagesController {
  constructor(private readonly comboImagesService: ComboImagesService) {}

  @Post()
  create(@Body() createComboImageDto: CreateComboImageDto) {
    return this.comboImagesService.create(createComboImageDto)
  }

  @ApiOkResponse({
    type: [ComboImageEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.comboImagesService.findByIds(id)
    } else {
      return this.comboImagesService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComboImageDto: UpdateComboImageDto) {
    return this.comboImagesService.update(+id, updateComboImageDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comboImagesService.remove(+id)
  }
}
