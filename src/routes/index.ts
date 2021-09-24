import express from 'express'
import PingController from '../controllers/ping'

const router = express.Router()

router.get('/ping', async (_req, res) => {
  const controller = new PingController()
  const response = await controller.getMessage()
  return res.send(response)
})

router.get('/ping/nice/nice', (_req, res) => {
  const controller = new PingController()
  const response = controller.getNice()
  return res.send(response)
})

router.post('/ping/:name', async (req, res) => {
  const controller = new PingController()
  const response = await controller.create(req.params.name, req.body)
  return res.send(response)
})

export default router
