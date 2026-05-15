import { z } from 'zod'

// QUERY PAGINATION
export const categoryQueryPaginationSchema = z.object({

  page: z.coerce
    .number()
    .positive()
    .default(1),

  size: z.coerce
    .number()
    .positive()
    .default(10)

})

// PARAMS ID
export const categoryParamsSchema = z.object({

  id: z.uuid()

})

// CREATE CATEGORY
export const createCategorySchema = z.object({

  name: z
    .string()
    .min(
      3,
      'O nome deve ter no mínimo 3 letras'
    )

})