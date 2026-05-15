import express from 'express'

import { ProductController } from '../controllers/product.controller'

import {
  createProductSchema,
  productParamsSchema
} from '../schemas/product.schema'

import { validateData } from '../middlewares/validateData'

const router = express.Router()

// GET /products
router.get(
  '/',
  ProductController.getAll
)

// POST /products
router.post(
  '/',
  validateData(
    createProductSchema,
    'body'
  ),
  ProductController.create
)

// DELETE /products/:id
router.delete(
  '/:id',
  validateData(
    productParamsSchema,
    'params'
  ),
  ProductController.delete
)

export default router