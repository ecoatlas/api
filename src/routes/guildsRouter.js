import { Router } from 'express'
import {
  getGuildController,
  getGuildPermissionsController,
  getGuildsController,
} from '../controllers/guilds.js'
import { isAuthenticated } from '../utils/middlewares.js'

const router = Router()

router.get('/', isAuthenticated, getGuildsController)
router.get('/:id/permissions', isAuthenticated, getGuildPermissionsController)
router.get('/:id', isAuthenticated, getGuildController)

export default router
