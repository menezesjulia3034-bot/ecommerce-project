import { v4 as uuid }
from 'uuid'

export class Category {

  constructor(

    public id: string,

    public name: string,

    public createdAt: Date

  ) {}

  static create(
    name: string
  ) {

    if (
      name.length < 3
    ) {

      throw new Error(
        'Nome inválido'
      )

    }

    return new Category(

      uuid(),

      name,

      new Date()

    )

  }

  rename(
    newName: string
  ) {

    if (
      newName.length < 3
    ) {

      throw new Error(
        'Nome inválido'
      )

    }

    this.name = newName

  }

}