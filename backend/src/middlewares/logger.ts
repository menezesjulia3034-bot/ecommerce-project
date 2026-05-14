import {
  Request,
  Response,
  NextFunction
} from 'express'

export default function logger(
  req: Request,
 res: Response,
  next: NextFunction
) {

  const date = new Date().toLocaleString()

  console.log(
    `[${date}] ${req.method} ${req.url}`
  )

  next()

}
