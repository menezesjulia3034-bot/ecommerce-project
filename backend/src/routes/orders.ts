import express, {
  Request,
  Response
} from 'express'

const router = express.Router()

const orders: any[] = []

// POST /orders
router.post(
  '/',
  (
    req: Request,
    res: Response
  ) => {

    const body = req.body

    // valida body vazio
    if (
      !body ||
      Object.keys(body).length === 0
    ) {

      return res
        .status(400)
        .json({
          error: 'Body vazio'
        })

    }

    const newOrder = {
      id: orders.length + 1,
      customer: body.customer,
      products: body.products,
      status: 'pendente'
    }

    orders.push(newOrder)

    res
      .status(201)
      .json({
        message: 'Pedido criado com sucesso',
        order: newOrder
      })

  }
)

// PATCH /orders/:id
router.patch(
  '/:id',
  (
    req: Request,
    res: Response
  ) => {

    const id =
      Number(req.params.id)

    const { status } =
      req.body

    const order =
      orders.find(
        order => order.id === id
      )

    if (!order) {

      return res
        .status(404)
        .json({
          error: 'Pedido não encontrado'
        })

    }

    order.status = status

    res.json({
      message: 'Status atualizado',
      order
    })

  }
)

// DELETE /orders/:id
router.delete(
  '/:id',
  (
    req: Request,
    res: Response
  ) => {

    const id =
      Number(req.params.id)

    const orderIndex =
      orders.findIndex(
        order => order.id === id
      )

    if (orderIndex === -1) {

      return res
        .status(404)
        .json({
          error: 'Pedido não encontrado'
        })

    }

    orders.splice(orderIndex, 1)

    res.sendStatus(204)

  }
)

export default router