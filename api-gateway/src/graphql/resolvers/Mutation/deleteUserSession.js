import usersService from '#root/adapter/usersService'

const deleteUserSessionResolver = async (obj, {
  sessionId
}, context) => {
  await usersService.deleteUserSession({
    sessionId
    })

    context.res.clearCookie("userSessionId")

    return true

}



export default deleteUserSessionResolver