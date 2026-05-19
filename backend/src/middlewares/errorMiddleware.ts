import {
  Request,
  Response,
  NextFunction
} from 'express'

export function errorMiddleware(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {

  console.error(error)

  // 404
  if (
    error.message?.includes(
      'não encontrado'
    )
  ) {

    return res
      .status(404)
      .json({
        error: error.message
      })

  }

  // 401
  if (
    error.message?.includes(
      'Token'
    )
  ) {

    return res
      .status(401)
      .json({
        error: error.message
      })

  }

  // 403
  if (
    error.message?.includes(
      'Acesso negado'
    )
  ) {

    return res
      .status(403)
      .json({
        error: error.message
      })

  }

  // 400
  return res
    .status(400)
    .json({

      error:
        error.message ||

        'Erro interno'

    })

}