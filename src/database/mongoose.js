import mongoose from 'mongoose'

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err))
