export class CreatePizzaSizeDto {
  size: number
  unit: string
}

export class QueryArg {
  id: string | string[]
  limit?: string
  offset?: string
}
