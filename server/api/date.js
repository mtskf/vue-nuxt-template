import { Router } from 'express'

const router = Router()

router.get('/date/now', function (req, res, next) {
  res.json({date: Date.now()})
})


export default router
