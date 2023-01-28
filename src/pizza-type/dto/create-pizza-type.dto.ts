export class CreatePizzaTypeDto {
  type: string
}

export class QueryArg {
  id: string | string[]
  limit?: string
  offset?: string
}
