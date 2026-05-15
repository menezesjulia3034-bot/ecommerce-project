import {
  Request,
  Response
} from 'express'

export class ProductController {

  // GET /products
  static getAll(
    req: Request,
    res: Response
  ) {

    const { category } = req.query

    res.json({

      message: 'Lista de produtos',

      filter: category || null

    })

  }

  // POST /products
  static create(
    req: Request,
    res: Response
  ) {

    res
      .status(201)
      .json({

        message: 'Produto criado',

        product: req.body

      })

  }

  // DELETE /products/:id
  static delete(
    req: Request,
    res: Response
  ) {

    res.sendStatus(204)

  }

}