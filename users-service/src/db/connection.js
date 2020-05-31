import sequelize from 'sequelize'
import accessEnv from '#root/helpers/accessEnv'

const DB_URI = accessEnv('DB_URI')

const sequelizeConnection = new sequelize(DB_URI, {
    dialetOptions: {
        charset: "utf8",
        multipleStatement: false
    }, 
    logging: false
})



export default sequelizeConnection 