import { Category }
from '../entities/Category'

export class CategoryRepository {

  private categories: Category[] = []

  createCategory(
    category: Category
  ) {

    this.categories.push(category)

    return category

  }

  getAllCategories(

    page: number,

    size: number

  ) {

    const start =
      (page - 1) * size

    const end =
      start + size

    return this.categories.slice(
      start,
      end
    )

  }

  getCategoryById(
    id: string
  ) {

    return this.categories.find(
      category =>
        category.id === id
    ) || null

  }

  updateCategory(
    updatedCategory: Category
  ) {

    const index =
      this.categories.findIndex(
        category =>
          category.id ===
          updatedCategory.id
      )

    if (index < 0) {

      return null

    }

    this.categories[index] =
      updatedCategory

    return updatedCategory

  }

  deleteCategory(
    id: string
  ) {

    const index =
      this.categories.findIndex(
        category =>
          category.id === id
      )

    if (index < 0) {

      return false

    }

    this.categories.splice(
      index,
      1
    )

    return true

  }

}

export const categoryRepository =
  new CategoryRepository()