import { addHours } from "date-fns"

import {User,UserSessions} from '#root/db/models'

import generateUUID from '#root/helpers/generateUUID'

import hashPassword from '#root/helpers/hashPassword'

import passwordCompare from '#root/helpers/passwordCompare'


const USER_SESSION_EXPIRY_HOURS = 1

const setupRoutes = app => {


    app.post('/session', async (req, res, next) => {

        if(!req.body.email || !req.body.password) {
            return next(new Error(
                'invalid name'
            ))
        }
        try {
            const user = await User.findOne({attributes: {}, where: {email: req.body.email}})
            console.log(user)
            
            if(!user) return next( new Error('invalid email'))

            if(!passwordCompare(req.body.password, user.passwordHash) ){
                return new next(Error("Invalid password"))
            }

            const expiresAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS)

            const sessionToken = generateUUID()

            const  userSession = await UserSessions.create({
                expiresAt,
                id: sessionToken,
                userId: user.id
            })

            return res.json(userSession)


        } catch (error) {
            return next(error)
        }
    })
    
    app.post('/users', async (req, res , next) => {
    
        if(!req.body.email || !req.body.password) {
            return next(new Error(
                'invalid name'
            ))
        }

        try {
           const newUser  =  await  User.create({
               email: req.body.email,
               id: generateUUID(),
               passwordHash: hashPassword(req.body.password)
           })      
           
           
           return res.json(newUser)
        } catch (error) {
            next(error)
        }

    } )
}

export default setupRoutes