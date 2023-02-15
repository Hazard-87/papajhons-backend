import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { SauceSizesService } from './sauce-sizes.service'
import { CreateSauceSizeDto, QueryArg } from './dto/create-sauce-size.dto'
import { UpdateSauceSizeDto } from './dto/update-sauce-size.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { SauceSizeEntity } from './entities/sauce-size.entity'

@Controller('sauceSizes')
@ApiTags('sauceSizes')
export class SauceSizesController {
  constructor(private readonly sauceSizesService: SauceSizesService) {}

  @Post()
  create(@Body() createSauceSizeDto: CreateSauceSizeDto) {
    return this.sauceSizesService.create(createSauceSizeDto)
  }

  @ApiOkResponse({
    type: [SauceSizeEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.sauceSizesService.findByIds(id)
    } else {
      return this.sauceSizesService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSauceSizeDto: UpdateSauceSizeDto) {
    return this.sauceSizesService.update(+id, updateSauceSizeDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sauceSizesService.remove(+id)
  }
}
