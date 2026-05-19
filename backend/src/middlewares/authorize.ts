import {
  Request,
  Response,
  NextFunction
} from 'express'

export function authorize(
  role: string
) {

  return (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    if (
      (req as any).user?.role !== role
    ) {

      return res
        .status(403)
        .json({
          error: 'Acesso negado'
        })

    }

    next()

  }

}