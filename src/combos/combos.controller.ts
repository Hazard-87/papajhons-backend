import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { CombosService } from './combos.service'
import { CreateComboDto, QueryArg } from './dto/create-combo.dto'
import { UpdateComboDto } from './dto/update-combo.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { ComboEntity } from './entities/combo.entity'

@Controller('combos')
@ApiTags('combos')
export class CombosController {
  constructor(private readonly combosService: CombosService) {}

  @Post()
  create(@Body() createComboDto: CreateComboDto) {
    return this.combosService.create(createComboDto)
  }

  @ApiOkResponse({
    type: [ComboEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.combosService.findByIds(id)
    } else {
      return this.combosService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComboDto: UpdateComboDto) {
    return this.combosService.update(+id, updateComboDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.combosService.remove(+id)
  }
}
