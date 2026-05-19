import {
  Request,
  Response,
  NextFunction
} from 'express'

import { CategoryService }
from '../services/CategoryService'

import {
  categoryParamsSchema,
  categoryQueryPaginationSchema,
  createCategorySchema,
  updateCategorySchema
} from '../schemas/category.schema'

export class CategoryController {

  constructor(
    private categoryService:
      CategoryService
  ) {}

  getAll = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {

      const query =
        categoryQueryPaginationSchema
          .parse(req.query)

      const categories =
        this.categoryService.getAll(
          query.page,
          query.size
        )

      res.json(categories)

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
        categoryParamsSchema
          .parse(req.params)

      const category =
        this.categoryService
          .getById(params.id)

      res.json(category)

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
        createCategorySchema
          .parse(req.body)

      const category =
        this.categoryService
          .create(body.name)

      res
        .status(201)
        .json(category)

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
        categoryParamsSchema
          .parse(req.params)

      const body =
        updateCategorySchema
          .parse(req.body)

      const category =
        this.categoryService.update(
          params.id,
          body.name
        )

      res.json(category)

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
        categoryParamsSchema
          .parse(req.params)

      this.categoryService
        .delete(params.id)

      res.sendStatus(204)

    } catch (error) {

      next(error)

    }

  }

}