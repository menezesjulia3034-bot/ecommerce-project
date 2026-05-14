import express from 'express'

import productsRouter from './routes/products'
import ordersRouter from './routes/orders'

import logger from './middlewares/logger'

const app = express()

app.use(express.json())

app.use(logger)

app.use('/products', productsRouter)

app.use('/orders', ordersRouter)

const PORT = 3000

app.listen(PORT, () => {

  console.log(
    `🚀 Servidor rodando em http://localhost:${PORT}`
  )

})