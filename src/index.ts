import dotenv from 'dotenv'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import Router from './routes'
import { logger } from './utils/Logger'
const path = require('path')

dotenv.config()
const app = express()
const port = 3000

app.use(express.json())
app.use(express.static('public'))

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json',
    },
  })
)

app.use(Router)

app.listen(port, () => {
  logger.info(`App is listening on port ${port}`)
})
