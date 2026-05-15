import express, { Request, Response } from 'express'

import { createProductSchema } from '../schemas/product.schema'
import { validateData } from '../middlewares/validateData'

const router = express.Router()

const products = [
  { id: 1, name: 'Notebook Gamer RTX', price: 4500, category: 'informatica' },
  { id: 2, name: 'Mouse RGB', price: 250, category: 'acessorios' },
  { id: 3, name: 'Teclado Mecânico', price: 500, category: 'acessorios' },
  { id: 4, name: 'Monitor UltraWide 34', price: 2899, category: 'informatica' },
  { id: 5, name: 'Headset Gamer Wireless', price: 799, category: 'acessorios' },
  { id: 6, name: 'iPhone 15 Pro Max', price: 8999, category: 'eletronicos' },
  { id: 7, name: 'Apple Watch Series 9', price: 3499, category: 'eletronicos' },
  { id: 8, name: 'PlayStation 5', price: 4299, category: 'eletronicos' },
  { id: 9, name: 'Xbox Series X', price: 3999, category: 'eletronicos' },
  { id: 10, name: 'Cadeira Gamer Premium', price: 1599, category: 'moveis' },
  { id: 11, name: 'SSD NVMe 1TB', price: 699, category: 'informatica' },
  { id: 12, name: 'Placa de Vídeo RTX 4070', price: 5299, category: 'informatica' },
  { id: 13, name: 'Smart TV 65 4K', price: 3799, category: 'eletronicos' },
  { id: 14, name: 'MacBook Pro M3', price: 12499, category: 'informatica' },
  { id: 15, name: 'AirPods Pro 2', price: 1899, category: 'eletronicos' },
  { id: 16, name: 'Tablet Galaxy Tab S9', price: 4599, category: 'eletronicos' },
  { id: 17, name: 'Câmera DSLR Canon', price: 6799, category: 'eletronicos' },
  { id: 18, name: 'Drone DJI Mini', price: 5499, category: 'eletronicos' },
  { id: 19, name: 'Echo Dot Alexa', price: 399, category: 'eletronicos' },
  { id: 20, name: 'Roteador Gamer Wi-Fi 6', price: 1299, category: 'informatica' }
]

// GET /products
router.get('/', (req: Request, res: Response) => {
  const category = req.query.category as string

  if (!category) {
    return res.json(products)
  }

  const filtered = products.filter(
    p => p.category === category
  )

  return res.json(filtered)
})

// GET /products/:id
router.get('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)

  if (isNaN(id)) {
    return res.status(400).json({
      error: 'ID inválido'
    })
  }

  const product = products.find(p => p.id === id)

  if (!product) {
    return res.status(404).json({
      error: 'Produto não encontrado'
    })
  }

  return res.json(product)
})

// POST /products (ZOD)
router.post(
  '/',
  validateData(createProductSchema),
  (req: Request, res: Response) => {
    const newProduct = {
      id: products.length + 1,
      ...req.body
    }

    products.push(newProduct)

    return res.status(201).json(newProduct)
  }
)

// DELETE /products/:id
router.delete('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)

  if (isNaN(id)) {
    return res.status(400).json({
      error: 'ID inválido'
    })
  }

  const index = products.findIndex(p => p.id === id)

  if (index === -1) {
    return res.status(404).json({
      error: 'Produto não encontrado'
    })
  }

  products.splice(index, 1)

  return res.sendStatus(204)
})

export default router