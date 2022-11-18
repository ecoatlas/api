import passport from 'passport'
import { Strategy } from 'passport-discord'
import User from '../database/schemas/user.js'
import { config } from 'dotenv'

config()

passport.serializeUser((user, done) => {
  return done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    return user ? done(null, user) : done(null, null)
  } catch (err) {
    console.log(err)
    return done(err, null)
  }
})

passport.use(
  new Strategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: process.env.DISCORD_CALLBACK_URL,
      scope: ['identify', 'email', 'guilds'],
    },
    async (
      accessToken,
      refreshToken,
      profile,
      done
    ) => {
      const { id: discordId } = profile
      try {
        const existingUser = await User.findOneAndUpdate(
          { discordId },
          { accessToken, refreshToken },
          { new: true }
        )
        if (existingUser) return done(null, existingUser)
        const newUser = new User({ discordId, accessToken, refreshToken })
        const savedUser = await newUser.save()
        return done(null, savedUser)
      } catch (err) {
        console.log(err)
        return done(err, undefined)
      }
    }
  )
)
