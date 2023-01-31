export class CreateProductDto {
  name: string
  image: string
}

export class QueryArg {
  id: string | string[]
  limit?: string
  offset?: string
}
