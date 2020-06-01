import usersService from '#root/adapter/usersService'

const createUserSessionResolver =  async (obj, {email, password}, context) => {

const userSession =  await usersService.createUserSession({email, password})


context.res.cookie("userSessionId", userSession.id, {httpOnly: true})

return userSession 
   
}



export default createUserSessionResolver