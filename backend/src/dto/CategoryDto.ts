import { Category }
from '../entities/Category'

export class CategoryResponseDto {

  id: string
  name: string

  private constructor(
    id: string,
    name: string
  ) {

    this.id = id
    this.name = name

  }

  static create(
    category: Category
  ) {

    return new CategoryResponseDto(
      category.id,
      category.name
    )

  }

}

export class CategoryListDto {

  data: CategoryResponseDto[]
  page: number
  size: number

  constructor(
    data: CategoryResponseDto[],
    page: number,
    size: number
  ) {

    this.data = data
    this.page = page
    this.size = size

  }

}