import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { SnackImagesService } from './snack-images.service'
import { CreateSnackImageDto, QueryArg } from './dto/create-snack-image.dto'
import { UpdateSnackImageDto } from './dto/update-snack-image.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { SnackImageEntity } from './entities/snack-image.entity'

@Controller('snackImages')
@ApiTags('snackImages')
export class SnackImagesController {
  constructor(private readonly snackImagesService: SnackImagesService) {}

  @Post()
  create(@Body() createSnackImageDto: CreateSnackImageDto) {
    return this.snackImagesService.create(createSnackImageDto)
  }

  @ApiOkResponse({
    type: [SnackImageEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.snackImagesService.findByIds(id)
    } else {
      return this.snackImagesService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSnackImageDto: UpdateSnackImageDto) {
    return this.snackImagesService.update(+id, updateSnackImageDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.snackImagesService.remove(+id)
  }
}
