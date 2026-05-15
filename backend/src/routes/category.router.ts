import express from 'express'

import { CategoryController } from '../controllers/category.controller'

import {
  categoryQueryPaginationSchema,
  categoryParamsSchema,
  createCategorySchema
} from '../schemas/category.schema'

import { validateData } from '../middlewares/validateData'

const router = express.Router()

// GET /category
router.get(
  '/',
  validateData(
    categoryQueryPaginationSchema,
    'query'
  ),
  CategoryController.getAll
)

// GET /category/:id
router.get(
  '/:id',
  validateData(
    categoryParamsSchema,
    'params'
  ),
  CategoryController.getById
)

// POST /category
router.post(
  '/',
  validateData(
    createCategorySchema,
    'body'
  ),
  CategoryController.create
)

// PUT /category/:id
router.put(
  '/:id',
  validateData(
    categoryParamsSchema,
    'params'
  ),
  CategoryController.update
)

// DELETE /category/:id
router.delete(
  '/:id',
  validateData(
    categoryParamsSchema,
    'params'
  ),
  CategoryController.delete
)

export default router