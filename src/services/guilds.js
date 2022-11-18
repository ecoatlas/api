import axios from 'axios'
import User from '../database/schemas/user.js'
import { DISCORD_API_URL } from '../utils/constants.js'

export function getBotGuildsService() {
  const TOKEN = process.env.DISCORD_BOT_TOKEN

  return axios.get(`${DISCORD_API_URL}/users/@me/guilds`, {
    headers: {
      Authorization: `Bot ${TOKEN}`
    }
  })
}

export async function getUserGuildsService(id) {
  const user = await User.findById(id)

  if (!user) throw new Error('No user found')

  return axios.get(`${DISCORD_API_URL}/users/@me/guilds`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`
    }
  })
}

export async function getMutualGuildsService(id) {
  const { data: botGuilds } = await getBotGuildsService()
  const { data: userGuilds } = await getUserGuildsService(id)
  const adminUserGuilds = userGuilds.filter(
    ({ permissions }) => (parseInt(permissions) & 0x8) === 0x8
  )

  return adminUserGuilds.filter((guild) =>
    botGuilds.some((botGuild) => botGuild.id === guild.id)
  )
}

export function getGuildService(id) {
  const TOKEN = process.env.DISCORD_BOT_TOKEN

  return axios.get(`${DISCORD_API_URL}/guilds/${id}`, {
    headers: {
      Authorization: `Bot ${TOKEN}`
    }
  })
}
