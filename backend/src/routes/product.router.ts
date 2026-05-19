import express from 'express'

import { ProductController }
from '../controllers/product.controller'

import { ProductRepository }
from '../repositories/ProductRepository'

import {
  categoryRepository
}
from '../repositories/CategoryRepository'

import { ProductService }
from '../services/ProductService'

import {
  createProductSchema,
  updateProductSchema,
  productParamsSchema,
  productQuerySchema
} from '../schemas/product.schema'

import { validateData }
from '../middlewares/validateData'

import { authMiddleware }
from '../middlewares/authMiddleware'

import { authorize }
from '../middlewares/authorize'

const router = express.Router()

const productRepository =
  new ProductRepository()

const service =
  new ProductService(
    productRepository,
    categoryRepository
  )

const controller =
  new ProductController(service)

// PUBLIC
router.get(
  '/',
  validateData(
    productQuerySchema,
    'query'
  ),
  controller.getAll
)

router.get(
  '/:id',
  validateData(
    productParamsSchema,
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
    createProductSchema,
    'body'
  ),
  controller.create
)

router.put(
  '/:id',
  authMiddleware,
  authorize('admin'),
  validateData(
    productParamsSchema,
    'params'
  ),
  validateData(
    updateProductSchema,
    'body'
  ),
  controller.update
)

router.delete(
  '/:id',
  authMiddleware,
  authorize('admin'),
  validateData(
    productParamsSchema,
    'params'
  ),
  controller.delete
)

export default router