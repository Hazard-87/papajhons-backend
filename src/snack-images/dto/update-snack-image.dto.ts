import { PartialType } from '@nestjs/swagger'
import { CreateSnackImageDto } from './create-snack-image.dto'

export class UpdateSnackImageDto extends PartialType(CreateSnackImageDto) {}
