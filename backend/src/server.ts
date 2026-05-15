import express from 'express'

import productsRouter from './routes/products'
import ordersRouter from './routes/orders'

import categoryRouter from './routes/category.router'
import productRouter from './routes/product.router'

import logger from './middlewares/logger'

const app = express()

app.use(express.json())

app.use(logger)

// rotas antigas
app.use('/products-old', productsRouter)
app.use('/orders', ordersRouter)

// rotas novas
app.use('/category', categoryRouter)
app.use('/products', productRouter)

const PORT = 3000

app.listen(PORT, () => {

  console.log(
    `🚀 Servidor rodando em http://localhost:${PORT}`
  )

})