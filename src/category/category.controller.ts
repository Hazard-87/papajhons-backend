import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { CategoryService } from './category.service'
import { CreateCategoryDto, QueryArg } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { CategoryEntity } from './entities/category.entity'

@Controller('categories')
@ApiTags('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto)
  }

  @ApiOkResponse({
    type: [CategoryEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.categoryService.findByIds(id)
    } else {
      return this.categoryService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id)
  }
}
