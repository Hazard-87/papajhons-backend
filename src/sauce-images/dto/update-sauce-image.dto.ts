import { PartialType } from '@nestjs/swagger';
import { CreateSauceImageDto } from './create-sauce-image.dto';

export class UpdateSauceImageDto extends PartialType(CreateSauceImageDto) {}
