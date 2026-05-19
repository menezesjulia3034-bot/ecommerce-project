import express from 'express'

import categoryRoutes
from './routes/category.router'

import productRoutes
from './routes/product.router'

import logger
from './middlewares/logger'

import { errorMiddleware }
from './middlewares/errorMiddleware'

const app = express()

app.use(express.json())

// LOGGER GLOBAL
app.use(logger)

// ROUTES
app.use(
  '/category',
  categoryRoutes
)

app.use(
  '/products',
  productRoutes
)

// ERROR MIDDLEWARE
app.use(errorMiddleware)

const PORT = 3000

app.listen(PORT, () => {

  console.log(
    `🚀 Servidor rodando em:
http://localhost:${PORT}`
  )

})