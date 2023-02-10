import { PartialType } from '@nestjs/swagger'
import { CreateSnackSizeDto } from './create-snack-size.dto'

export class UpdateSnackSizeDto extends PartialType(CreateSnackSizeDto) {}
