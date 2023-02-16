import { PartialType } from '@nestjs/swagger';
import { CreateHotterDto } from './create-hotter.dto';

export class UpdateHotterDto extends PartialType(CreateHotterDto) {}
