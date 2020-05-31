import express from 'express'
import cors from 'cors'

import accessEnv from '#root/helpers/accessEnv'
import setupRoutes from './routes'
const port = accessEnv("PORT",7101)

const app = express()

app.use(cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

setupRoutes(app)


app.listen(port, "0.0.0.0", () => console.log(`server for users service started on ${port}`))