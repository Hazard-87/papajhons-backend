import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { SauceImagesService } from './sauce-images.service'
import { CreateSauceImageDto, QueryArg } from './dto/create-sauce-image.dto'
import { UpdateSauceImageDto } from './dto/update-sauce-image.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { SauceImageEntity } from './entities/sauce-image.entity'

@Controller('sauceImages')
@ApiTags('sauceImages')
export class SauceImagesController {
  constructor(private readonly sauceImagesService: SauceImagesService) {}

  @Post()
  create(@Body() createSauceImageDto: CreateSauceImageDto) {
    return this.sauceImagesService.create(createSauceImageDto)
  }

  @ApiOkResponse({
    type: [SauceImageEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.sauceImagesService.findByIds(id)
    } else {
      return this.sauceImagesService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSauceImageDto: UpdateSauceImageDto) {
    return this.sauceImagesService.update(+id, updateSauceImageDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sauceImagesService.remove(+id)
  }
}
