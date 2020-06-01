import UserService from '#root/adapter/usersService'



const UserSession  = {
     user: async userSession => {
         return await UserService.fetchUser({userId: userSession.userId})
     }
}

export default UserSession