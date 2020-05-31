import {ApolloServer} from 'apollo-server-express'
import cookieparser from 'cookie-parser'

import cors from 'cors'
import express from 'express'


import accessEnv from '#root/helpers/accessEnv'

const port = accessEnv("PORT", 7000)