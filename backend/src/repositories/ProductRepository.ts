import { Product } from '../entities/Product'

export class ProductRepository {

  private products: Product[] = []

  createProduct(
    product: Product
  ): Product {

    this.products.push(product)

    return product

  }

  getAllProducts(
    page: number,
    size: number
  ): Product[] {

    const start =
      (page - 1) * size

    const end =
      start + size

    return this.products.slice(
      start,
      end
    )

  }

  getProductById(
    id: string
  ): Product | null {

    const product =
      this.products.find(
        product => product.id === id
      )

    return product || null

  }

  updateProduct(
    updatedProduct: Product
  ): Product | null {

    const index =
      this.products.findIndex(
        product =>
          product.id === updatedProduct.id
      )

    if (index < 0) {

      return null

    }

    this.products[index] =
      updatedProduct

    return updatedProduct

  }

  deleteProduct(
    id: string
  ): boolean {

    const index =
      this.products.findIndex(
        product =>
          product.id === id
      )

    if (index < 0) {

      return false

    }

    this.products.splice(index, 1)

    return true

  }

}