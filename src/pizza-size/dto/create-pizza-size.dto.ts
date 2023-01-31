export class CreatePizzaSizeDto {
  pizzaID: number
  type: string
  size: number
  isBorder: boolean
}

export class QueryArg {
  id: string | string[]
  limit?: string
  offset?: string
}
