import {DataTypes, Model} from 'sequelize'
import sequelizeConnection from './connection'

export class User extends Model {}

User.init(
    {
        id: {
            allowNull: false,
        
            primaryKey: true,
            type: DataTypes.UUID
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        },
        passwordHash: {
            allowNull: false,
            type: DataTypes.CHAR(64),
            
        },
   },
   {
       defaultScope: {
           raw: {exclude: ["passwordHash"]}
       },
       modelName: "users",
       tableName: "users",
       sequelize: sequelizeConnection
   }
)


export class UserSessions extends Model{}
UserSessions.init(
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        userId: {
            allowNull:false,
            type: DataTypes.UUID
            
        },
        expiresAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
    }, 
    {
        modelName: "userSessions",
        tableName: "userSessions",
        paranoid: false,
        updatedAt: false,
        sequelize: sequelizeConnection
    }
)