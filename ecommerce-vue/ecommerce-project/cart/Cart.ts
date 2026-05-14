import { Product } from "../models/Product"
import { CartItem } from "./CartItem"

export class Cart {

  private items: CartItem[] = []

  addItem(product: Product, quantity: number): void {

    const exists = this.items.some(
      item => item.product.id === product.id
    )

    if (exists) {

      this.items = this.items.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )

    } else {

      this.items.push({
        product: product,
        quantity: quantity
      })

    }

  }

  getTotalItems(): number {

    return this.items.reduce(
      (total, item) => total + item.quantity,
      0
    )

  }

  getFinalPrice(): number {

    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )

  }

}