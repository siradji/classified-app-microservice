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

app.use((err, req, res, next) => {
    return res.status(500).json({mesage: err.message})
})

app.listen(port, "0.0.0.0", () => console.log(`server for users service started on ${port}`))