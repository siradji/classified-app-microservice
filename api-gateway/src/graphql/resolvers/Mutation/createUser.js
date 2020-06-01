import usersService from '#root/adapter/usersService'

const creatUserResolver =  async (obj, {email, password}) => {

return await usersService.createUser({email, password})

}



export default creatUserResolver