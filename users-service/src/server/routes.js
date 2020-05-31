import {User} from '#root/db/models'



const setupRoutes = app => {
    app.post('/users', async (req, res , next) => {
        if(!req.body.email || !req.body.password) {
            return next(new Error(
                'invalid name'
            ))
        }


    } )
}

export default setupRoutes