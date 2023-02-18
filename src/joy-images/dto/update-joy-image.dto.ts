import { PartialType } from '@nestjs/swagger';
import { CreateJoyImageDto } from './create-joy-image.dto';

export class UpdateJoyImageDto extends PartialType(CreateJoyImageDto) {}
