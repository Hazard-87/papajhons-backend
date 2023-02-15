import { PartialType } from '@nestjs/swagger';
import { CreateDessertSizeDto } from './create-dessert-size.dto';

export class UpdateDessertSizeDto extends PartialType(CreateDessertSizeDto) {}
