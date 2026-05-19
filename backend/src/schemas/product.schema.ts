import { z } from 'zod'

// QUERY PAGINATION
export const productQuerySchema = z.object({

  page: z.coerce
    .number()
    .positive()
    .default(1),

  size: z.coerce
    .number()
    .positive()
    .default(10)

})

// CREATE PRODUCT
export const createProductSchema = z.object({

  name: z
    .string()
    .min(
      3,
      'Nome deve ter no mínimo 3 caracteres'
    ),

  price: z
    .number()
    .positive(
      'Preço deve ser positivo'
    ),

  stock: z
    .number()
    .min(
      0,
      'Estoque inválido'
    ),

  categoryId: z
    .uuid(
      'CategoryId precisa ser um UUID válido'
    )

})

// UPDATE PRODUCT
export const updateProductSchema = z.object({

  name: z
    .string()
    .min(
      3,
      'Nome deve ter no mínimo 3 caracteres'
    ),

  price: z
    .number()
    .positive(
      'Preço deve ser positivo'
    ),

  stock: z
    .number()
    .min(
      0,
      'Estoque inválido'
    ),

  categoryId: z
    .uuid(
      'CategoryId precisa ser um UUID válido'
    )

})

// PARAMS ID
export const productParamsSchema = z.object({

  id: z.uuid()

})