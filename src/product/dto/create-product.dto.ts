export class CreateProductDto {
  name: string
}

export class QueryArg {
  id: string | string[]
  limit?: string
  offset?: string
}
