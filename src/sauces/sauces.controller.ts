import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { SaucesService } from './sauces.service'
import { CreateSauceDto, QueryArg } from './dto/create-sauce.dto'
import { UpdateSauceDto } from './dto/update-sauce.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { SauceEntity } from './entities/sauce.entity'

@Controller('sauces')
@ApiTags('sauces')
export class SaucesController {
  constructor(private readonly saucesService: SaucesService) {}

  @Post()
  create(@Body() createSauceDto: CreateSauceDto) {
    return this.saucesService.create(createSauceDto)
  }

  @ApiOkResponse({
    type: [SauceEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.saucesService.findByIds(id)
    } else {
      return this.saucesService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSauceDto: UpdateSauceDto) {
    return this.saucesService.update(+id, updateSauceDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saucesService.remove(+id)
  }
}
