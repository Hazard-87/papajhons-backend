import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { SnackSizesService } from './snack-sizes.service'
import { CreateSnackSizeDto, QueryArg } from './dto/create-snack-size.dto'
import { UpdateSnackSizeDto } from './dto/update-snack-size.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { SnackSizeEntity } from './entities/snack-size.entity'

@Controller('snackSizes')
@ApiTags('snackSizes')
export class SnackSizesController {
  constructor(private readonly snackSizesService: SnackSizesService) {}

  @Post()
  create(@Body() createSnackSizeDto: CreateSnackSizeDto) {
    return this.snackSizesService.create(createSnackSizeDto)
  }

  @ApiOkResponse({
    type: [SnackSizeEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.snackSizesService.findByIds(id)
    } else {
      return this.snackSizesService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSnackSizeDto: UpdateSnackSizeDto) {
    return this.snackSizesService.update(+id, updateSnackSizeDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.snackSizesService.remove(+id)
  }
}
