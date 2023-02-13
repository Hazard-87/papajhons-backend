import { PartialType } from '@nestjs/swagger'
import { CreateBeverageImageDto } from './create-beverage-image.dto'

export class UpdateBeverageImageDto extends PartialType(CreateBeverageImageDto) {}
