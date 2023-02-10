import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { SnacksService } from './snacks.service'
import { CreateSnackDto, QueryArg } from './dto/create-snack.dto'
import { UpdateSnackDto } from './dto/update-snack.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { SnackEntity } from './entities/snack.entity'

@Controller('snacks')
@ApiTags('snacks')
export class SnacksController {
  constructor(private readonly snacksService: SnacksService) {}

  @Post()
  create(@Body() createSnackDto: CreateSnackDto) {
    return this.snacksService.create(createSnackDto)
  }

  @ApiOkResponse({
    type: [SnackEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.snacksService.findByIds(id)
    } else {
      return this.snacksService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSnackDto: UpdateSnackDto) {
    return this.snacksService.update(+id, updateSnackDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.snacksService.remove(+id)
  }
}
