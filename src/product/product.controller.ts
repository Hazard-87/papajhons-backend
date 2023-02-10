import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { ProductService } from './product.service'
import { CreateProductDto, QueryArg } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { ProductEntity } from './entities/product.entity'

@Controller('products')
@ApiTags('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto)
  }

  @ApiOkResponse({
    type: [ProductEntity]
  })
  @Get()
  findByParams(@Query('id') id?: string | string[], @Query() query?: QueryArg) {
    if (id) {
      return this.productService.findByIds(id)
    } else {
      return this.productService.findAll(query)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id)
  }
}
