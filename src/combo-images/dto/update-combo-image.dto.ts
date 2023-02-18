import { PartialType } from '@nestjs/swagger';
import { CreateComboImageDto } from './create-combo-image.dto';

export class UpdateComboImageDto extends PartialType(CreateComboImageDto) {}
