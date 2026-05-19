import { v4 as uuid }
from 'uuid'

export class Product {

  constructor(

    public id: string,

    public name: string,

    public price: number,

    public stock: number,

    public categoryId: string,

    public createdAt: Date

  ) {}

  static create(

    name: string,

    price: number,

    stock: number,

    categoryId: string

  ) {

    if (
      name.length < 3
    ) {

      throw new Error(
        'Nome inválido'
      )

    }

    if (
      price <= 0
    ) {

      throw new Error(
        'Preço inválido'
      )

    }

    if (
      stock < 0
    ) {

      throw new Error(
        'Estoque inválido'
      )

    }

    return new Product(

      uuid(),

      name,

      price,

      stock,

      categoryId,

      new Date()

    )

  }

}