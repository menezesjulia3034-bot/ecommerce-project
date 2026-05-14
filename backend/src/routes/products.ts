import express, {
  Request,
  Response
} from 'express'

const router = express.Router()

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    category: 'eletronicos',
    price: 8999
  },
  {
    id: 2,
    name: 'Notebook Gamer',
    category: 'informatica',
    price: 6500
  },
  {
    id: 3,
    name: 'Headset RGB',
    category: 'acessorios',
    price: 399
  }
]

// GET /products
router.get(
  '/',
  (
    req: Request,
    res: Response
  ) => {

    const category =
      req.query.category as string

    // sem filtro
    if (!category) {

      return res.json(products)

    }

    // filtrado
    const filteredProducts =
      products.filter(product =>
        product.category === category
      )

    res.json(filteredProducts)

  }
)

// GET /products/:id
router.get(
  '/:id',
  (
    req: Request,
    res: Response
  ) => {

    const id =
      Number(req.params.id)

    // validação
    if (id < 0) {

      return res
        .status(400)
        .json({
          error: 'ID inválido'
        })

    }

    const product =
      products.find(
        product => product.id === id
      )

    // produto não encontrado
    if (!product) {

      return res
        .status(404)
        .json({
          error: 'Produto não encontrado'
        })

    }

    res.json(product)

  }
)

export default router