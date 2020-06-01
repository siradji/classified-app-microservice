import got from 'got'

const USERS_SERVICE_URI = 'http://users-service:7101'

export default class usersService {
    static async createUser({email, password}) {
       const body = await got.post(`${USERS_SERVICE_URI}/users`, {
           json: {
               email, 
               password 
           }
       }).json()

       return body
    } 
 
    static async  fetchUser({userId}) {
        console.log('hit from fetch')
        const body  = await got.get(`${USERS_SERVICE_URI}/users/${userId}`).json()

        return body
    }

    static async createUserSession({email, password}) {
        const body = await got.post(`${USERS_SERVICE_URI}/session`, {
            json:{
                email,
                password
            }
        }).json()

        return body
    }


}