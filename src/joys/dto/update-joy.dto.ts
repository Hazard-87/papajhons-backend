import { PartialType } from '@nestjs/swagger';
import { CreateJoyDto } from './create-joy.dto';

export class UpdateJoyDto extends PartialType(CreateJoyDto) {}
