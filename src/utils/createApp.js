import { config } from 'dotenv'
import cors from 'cors'
import express from 'express'
import session from 'express-session'
import passport from 'passport'
import router from '../routes/router.js'
import store from 'connect-mongo'
import '../strategies/discord.js'

config()

export default function createApp() {
  const app = express()
  app.use(express.static('public'))
  app.use(express.json())
  app.use(express.urlencoded())
  app.use(
    cors({
      origin: [process.env.DOMAIN],
      credentials: true
    })
  )
  app.use(
    session({
      secret: 'OFHTQTUHTITJZVNMRNZFDMICPIJBYZOU',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 * 60 * 24 * 7 },
      store: store.create({
        mongoUrl: process.env.DATABASE_URL,
      }),
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())
  app.use((req, res, next) => setTimeout(() => next(), 800))
  app.use('/api', router)
  return app
}
