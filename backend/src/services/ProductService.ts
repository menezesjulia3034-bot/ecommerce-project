import { Product } from '../entities/Product'

import { ProductRepository }
from '../repositories/ProductRepository'

import { CategoryRepository }
from '../repositories/CategoryRepository'

export class ProductService {

  constructor(
    private productRepository:
      ProductRepository,

    private categoryRepository:
      CategoryRepository
  ) {}

  getAll(
    page: number,
    size: number
  ) {

    return this.productRepository
      .getAllProducts(page, size)

  }

  getById(id: string) {

    const product =
      this.productRepository
        .getProductById(id)

    if (!product) {

      throw new Error(
        'Produto não encontrado'
      )

    }

    return product

  }

  create(
    name: string,
    price: number,
    stock: number,
    categoryId: string
  ) {

    const category =
      this.categoryRepository
        .getCategoryById(categoryId)

    if (!category) {

      throw new Error(
        'Categoria não encontrada'
      )

    }

    const product =
      Product.create(
        name,
        price,
        stock,
        categoryId
      )

    return this.productRepository
      .createProduct(product)

  }

  update(
    id: string,
    data: {
      name: string
      price: number
      stock: number
      categoryId: string
    }
  ) {

    const product =
      this.productRepository
        .getProductById(id)

    if (!product) {

      throw new Error(
        'Produto não encontrado'
      )

    }

    const category =
      this.categoryRepository
        .getCategoryById(
          data.categoryId
        )

    if (!category) {

      throw new Error(
        'Categoria não encontrada'
      )

    }

    product.name =
      data.name

    product.price =
      data.price

    product.stock =
      data.stock

    product.categoryId =
      data.categoryId

    return this.productRepository
      .updateProduct(product)

  }

  delete(id: string) {

    const product =
      this.productRepository
        .getProductById(id)

    if (!product) {

      throw new Error(
        'Produto não encontrado'
      )

    }

    this.productRepository
      .deleteProduct(id)

  }

}