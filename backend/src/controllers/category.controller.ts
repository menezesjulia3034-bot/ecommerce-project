import {
  Request,
  Response
} from 'express'

export class CategoryController {

  // GET /category
  static getAll(
    req: Request,
    res: Response
  ) {

    const { page, size } = req.query

    res.json({

      message: 'Lista de categorias',

      pagination: {
        page,
        size
      }

    })

  }

  // GET /category/:id
  static getById(
    req: Request,
    res: Response
  ) {

    const { id } = req.params

    res.json({

      message: 'Categoria encontrada',

      id

    })

  }

  // POST /category
  static create(
    req: Request,
    res: Response
  ) {

    res
      .status(201)
      .json({

        message: 'Categoria criada',

        category: req.body

      })

  }

  // PUT /category/:id
  static update(
    req: Request,
    res: Response
  ) {

    const { id } = req.params

    res.json({

      message: 'Categoria atualizada',

      id,

      data: req.body

    })

  }

  // DELETE /category/:id
  static delete(
    req: Request,
    res: Response
  ) {

    res.sendStatus(204)

  }

}