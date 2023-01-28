import { PartialType } from '@nestjs/mapped-types';
import { CreatePizzaTypeDto } from './create-pizza-type.dto';

export class UpdatePizzaTypeDto extends PartialType(CreatePizzaTypeDto) {}
