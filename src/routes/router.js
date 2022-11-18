import { Router } from 'express'
import authRouter from './authRouter.js'
import guildsRouter from './guildsRouter.js'

const router = Router()

router.use('/auth', authRouter)
router.use('/guilds', guildsRouter)

export default router
