import { Category } from "./Category"

export interface Product {
  id: number
  name: string
  price: number
  category: Category
}

export class ProductModel implements Product {

  id: number
  name: string
  price: number
  category: Category

  constructor(id: number, name: string, price: number, category: Category) {
    this.id = id
    this.name = name
    this.price = price
    this.category = category
  }

}