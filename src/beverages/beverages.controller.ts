import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { BeveragesService } from './beverages.service'
import { CreateBeverageDto, QueryArg } from './dto/create-beverage.dto'
import { UpdateBeverageDto } from './dto/update-beverage.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { BeverageEntity } from './entities/beverage.entity'

@Controller('beverages')
@ApiTags('beverages')
export class BeveragesController {
  constructor(private readonly beveragesService: BeveragesService) {}

  @Post()
  create(@Body() createBeverageDto: CreateBeverageDto) {
    return this.beveragesService.create(createBeverageDto)
  }

  @ApiOkResponse({
    type: [BeverageEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.beveragesService.findByIds(id)
    } else {
      return this.beveragesService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeverageDto: UpdateBeverageDto) {
    return this.beveragesService.update(+id, updateBeverageDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beveragesService.remove(+id)
  }
}
