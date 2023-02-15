import { PartialType } from '@nestjs/swagger';
import { CreateDessertImageDto } from './create-dessert-image.dto';

export class UpdateDessertImageDto extends PartialType(CreateDessertImageDto) {}
