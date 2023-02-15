import { PartialType } from '@nestjs/swagger';
import { CreateSauceSizeDto } from './create-sauce-size.dto';

export class UpdateSauceSizeDto extends PartialType(CreateSauceSizeDto) {}
