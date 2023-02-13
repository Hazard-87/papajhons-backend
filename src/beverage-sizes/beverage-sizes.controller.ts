import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { BeverageSizesService } from './beverage-sizes.service'
import { CreateBeverageSizeDto, QueryArg } from './dto/create-beverage-size.dto'
import { UpdateBeverageSizeDto } from './dto/update-beverage-size.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { BeverageSizeEntity } from './entities/beverage-size.entity'

@Controller('beverageSizes')
@ApiTags('beverageSizes')
export class BeverageSizesController {
  constructor(private readonly beverageSizesService: BeverageSizesService) {}

  @Post()
  create(@Body() createBeverageSizeDto: CreateBeverageSizeDto) {
    return this.beverageSizesService.create(createBeverageSizeDto)
  }

  @ApiOkResponse({
    type: [BeverageSizeEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.beverageSizesService.findByIds(id)
    } else {
      return this.beverageSizesService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeverageSizeDto: UpdateBeverageSizeDto) {
    return this.beverageSizesService.update(+id, updateBeverageSizeDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beverageSizesService.remove(+id)
  }
}
