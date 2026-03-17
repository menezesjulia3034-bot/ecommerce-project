import type { Product } from "./Product"
import type { CartItem } from "./CartItem"

export class Cart {

  items: CartItem[] = []

  addItem(product: Product) {

    const item = this.items.find(
      i => i.product.id === product.id
    )

    if (item) {
      item.quantity++
    } else {
      this.items.push({
        product,
        quantity: 1
      })
    }
  }

  removeOne(productId: number) {

    const item = this.items.find(
      i => i.product.id === productId
    )

    if (!item) return

    item.quantity--

    if (item.quantity <= 0) {
      this.removeItem(productId)
    }
  }

  removeItem(productId: number) {
    this.items = this.items.filter(
      item => item.product.id !== productId
    )
  }

  getTotalItems(): number {
    return this.items.reduce(
      (total, item) => total + item.quantity,
      0
    )
  }

  getFinalPrice(): number {
    return this.items.reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    )
  }
}