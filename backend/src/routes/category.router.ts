import express from 'express'

import { CategoryController }
from '../controllers/category.controller'

import {
  categoryRepository
}
from '../repositories/CategoryRepository'

import { CategoryService }
from '../services/CategoryService'

import {
  categoryQueryPaginationSchema,
  categoryParamsSchema,
  createCategorySchema,
  updateCategorySchema
} from '../schemas/category.schema'

import { validateData }
from '../middlewares/validateData'

import { authMiddleware }
from '../middlewares/authMiddleware'

import { authorize }
from '../middlewares/authorize'

const router = express.Router()

const service =
  new CategoryService(
    categoryRepository
  )

const controller =
  new CategoryController(service)

// PUBLIC
router.get(
  '/',
  validateData(
    categoryQueryPaginationSchema,
    'query'
  ),
  controller.getAll
)

router.get(
  '/:id',
  validateData(
    categoryParamsSchema,
    'params'
  ),
  controller.getById
)

// PROTECTED
router.post(
  '/',
  authMiddleware,
  authorize('admin'),
  validateData(
    createCategorySchema,
    'body'
  ),
  controller.create
)

router.put(
  '/:id',
  authMiddleware,
  authorize('admin'),
  validateData(
    categoryParamsSchema,
    'params'
  ),
  validateData(
    updateCategorySchema,
    'body'
  ),
  controller.update
)

router.delete(
  '/:id',
  authMiddleware,
  authorize('admin'),
  validateData(
    categoryParamsSchema,
    'params'
  ),
  controller.delete
)

export default router