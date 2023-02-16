import { PartialType } from '@nestjs/swagger';
import { CreateHotterImageDto } from './create-hotter-image.dto';

export class UpdateHotterImageDto extends PartialType(CreateHotterImageDto) {}
