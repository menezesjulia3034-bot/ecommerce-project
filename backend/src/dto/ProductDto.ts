import { Product }
from '../entities/Product'

export class ProductResponseDto {

  id: string
  name: string
  price: number
  stock: number
  categoryId: string

  private constructor(
    id: string,
    name: string,
    price: number,
    stock: number,
    categoryId: string
  ) {

    this.id = id
    this.name = name
    this.price = price
    this.stock = stock
    this.categoryId = categoryId

  }

  static create(
    product: Product
  ) {

    return new ProductResponseDto(
      product.id,
      product.name,
      product.price,
      product.stock,
      product.categoryId
    )

  }

}

export class ProductListDto {

  data: ProductResponseDto[]
  page: number
  size: number

  constructor(
    data: ProductResponseDto[],
    page: number,
    size: number
  ) {

    this.data = data
    this.page = page
    this.size = size

  }

}