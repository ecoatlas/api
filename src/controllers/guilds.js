import {
  getBotGuildsService,
  getGuildService,
  getMutualGuildsService,
  getUserGuildsService,
} from '../services/guilds.js'

export async function getGuildsController(req, res) {
  const user = req.user

  try {
    const guilds = await getMutualGuildsService(user.id)
    res.send(guilds)
  } catch (err) {
    console.log(err)
    res.status(400).send({ msg: 'Error' })
  }
}

export async function getGuildPermissionsController(req, res) {
  const user = req.user
  const { id } = req.params

  try {
    const guilds = await getMutualGuildsService(user.id)
    const valid = guilds.some((guild) => guild.id === id)
    return valid ? res.sendStatus(200) : res.sendStatus(403)
  } catch (err) {
    console.log(err)
    res.status(400).send({ msg: 'Error' })
  }
}

export async function getGuildController(req, res) {
  const { id } = req.params

  try {
    const { data: guild } = await getGuildService(id)
    res.send(guild)
  } catch (err) {
    console.log(err)
    res.status(400).send({ msg: 'Error' })
  }
}
