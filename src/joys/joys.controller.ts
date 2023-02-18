import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { JoysService } from './joys.service'
import { CreateJoyDto, QueryArg } from './dto/create-joy.dto'
import { UpdateJoyDto } from './dto/update-joy.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { JoyEntity } from './entities/joy.entity'

@Controller('joys')
@ApiTags('joys')
export class JoysController {
  constructor(private readonly joysService: JoysService) {}

  @Post()
  create(@Body() createJoyDto: CreateJoyDto) {
    return this.joysService.create(createJoyDto)
  }

  @ApiOkResponse({
    type: [JoyEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.joysService.findByIds(id)
    } else {
      return this.joysService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJoyDto: UpdateJoyDto) {
    return this.joysService.update(+id, updateJoyDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.joysService.remove(+id)
  }
}
