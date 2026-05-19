import { Category } from '../entities/Category'

import { CategoryRepository }
from '../repositories/CategoryRepository'

export class CategoryService {

  constructor(
    private categoryRepository:
      CategoryRepository
  ) {}

  getAll(
    page: number,
    size: number
  ) {

    return this.categoryRepository
      .getAllCategories(page, size)

  }

  getById(id: string) {

    const category =
      this.categoryRepository
        .getCategoryById(id)

    if (!category) {

      throw new Error(
        'Categoria não encontrada'
      )

    }

    return category

  }

  create(name: string) {

    const category =
      Category.create(name)

    return this.categoryRepository
      .createCategory(category)

  }

  update(
    id: string,
    name: string
  ) {

    const category =
      this.categoryRepository
        .getCategoryById(id)

    if (!category) {

      throw new Error(
        'Categoria não encontrada'
      )

    }

    category.rename(name)

    return this.categoryRepository
      .updateCategory(category)

  }

  delete(id: string) {

    const category =
      this.categoryRepository
        .getCategoryById(id)

    if (!category) {

      throw new Error(
        'Categoria não encontrada'
      )

    }

    this.categoryRepository
      .deleteCategory(id)

  }

}
