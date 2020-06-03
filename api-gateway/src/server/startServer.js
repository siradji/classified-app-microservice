// core
import {ApolloServer} from 'apollo-server-express'
import express from 'express'


//  middlewares 
import cors from 'cors'
import cookieparser from 'cookie-parser'
import InjectSession from './injectSession'

// helpers 
import accessEnv from '#root/helpers/accessEnv'
import resolvers from '#root/graphql/resolvers'
import typeDefs from '#root/graphql/typeDefs'



/**
 * Start of apollo - express server
 */

const port = accessEnv("PORT", 7000)

const apolloServer  = new ApolloServer({
    context: a => a,
    resolvers,
    typeDefs
})

const app  = express()

app.use(cookieparser())
app.use(cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
}))


app.use(InjectSession)

apolloServer.applyMiddleware({app, cors: false, path: '/graphql'})

app.listen(port, "0.0.0.0", () => {
    console.info(`Api gateway listing on port: ${port}`)
})


/**
 * End of apollo express server
 * 
 */