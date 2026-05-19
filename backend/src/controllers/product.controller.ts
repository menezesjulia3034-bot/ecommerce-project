import {
  Request,
  Response,
  NextFunction
} from 'express'

import { ProductService }
from '../services/ProductService'

import {
  productParamsSchema,
  productQuerySchema,
  createProductSchema,
  updateProductSchema
} from '../schemas/product.schema'

export class ProductController {

  constructor(
    private productService:
      ProductService
  ) {}

  getAll = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {

      const query =
        productQuerySchema
          .parse(req.query)

      const products =
        this.productService.getAll(
          query.page,
          query.size
        )

      res.json(products)

    } catch (error) {

      next(error)

    }

  }

  getById = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {

      const params =
        productParamsSchema
          .parse(req.params)

      const product =
        this.productService
          .getById(params.id)

      res.json(product)

    } catch (error) {

      next(error)

    }

  }

  create = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {

      const body =
        createProductSchema
          .parse(req.body)

      const product =
        this.productService.create(
          body.name,
          body.price,
          body.stock,
          body.categoryId
        )

      res
        .status(201)
        .json(product)

    } catch (error) {

      next(error)

    }

  }

  update = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {

      const params =
        productParamsSchema
          .parse(req.params)

      const body =
        updateProductSchema
          .parse(req.body)

      const product =
        this.productService.update(
          params.id,
          body
        )

      res.json(product)

    } catch (error) {

      next(error)

    }

  }

  delete = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {

      const params =
        productParamsSchema
          .parse(req.params)

      this.productService
        .delete(params.id)

      res.sendStatus(204)

    } catch (error) {

      next(error)

    }

  }

}