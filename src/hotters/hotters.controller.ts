import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { HottersService } from './hotters.service'
import { CreateHotterDto, QueryArg } from './dto/create-hotter.dto'
import { UpdateHotterDto } from './dto/update-hotter.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { HotterEntity } from './entities/hotter.entity'

@Controller('hotters')
@ApiTags('hotters')
export class HottersController {
  constructor(private readonly hottersService: HottersService) {}

  @Post()
  create(@Body() createHotterDto: CreateHotterDto) {
    return this.hottersService.create(createHotterDto)
  }

  @ApiOkResponse({
    type: [HotterEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.hottersService.findByIds(id)
    } else {
      return this.hottersService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotterDto: UpdateHotterDto) {
    return this.hottersService.update(+id, updateHotterDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hottersService.remove(+id)
  }
}
