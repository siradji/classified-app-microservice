import UsersService from  "#root/adapter/UsersService"


const InjectSession = async(req, res, next)  => {
    if(req.cookies.userSessionId)  {
        const session = await UsersService.fetchUserSession({
            sessionId: req.cookies.userSessionId
        })

        res.locals.userSession = session
    }


    return next()
}

export default InjectSession

