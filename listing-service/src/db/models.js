import {DataTypes, Model} from 'sequelize'

import sequelizeConnection from './connection'


export class Listings extends Model {}

Listings.init(
   {
    title: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT,
    },
   }, 
   {
       modelName: "listing", 
       tableName: "listing",
       sequelize:sequelizeConnection

   }
)