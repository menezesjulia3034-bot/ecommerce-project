import { z } from 'zod'

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

  categoryId: z
    .uuid(
      'CategoryId precisa ser um UUID válido'
    )

})

// PARAMS ID
export const productParamsSchema = z.object({

  id: z.uuid()

})