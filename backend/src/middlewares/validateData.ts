import {
  Request,
  Response,
  NextFunction
} from 'express'

import { ZodSchema } from 'zod'

export function validateData(
  schema: ZodSchema,
  type: 'body' | 'params' | 'query'
) {

  return (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    const result = schema.safeParse(
      req[type]
    )

    // erro
    if (!result.success) {

      return res
        .status(400)
        .json({
          errors: result.error.format()
        })

    }

    next()

  }

}