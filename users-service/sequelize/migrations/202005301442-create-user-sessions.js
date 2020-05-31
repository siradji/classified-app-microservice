module.exports.up  = (queryInterface, DataTypes) => {


    return queryInterface.createTable("userSessions", {
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
        userId: {
            allowNull:false,
            references:{
                key:"id",
                model: "users"
            }, 
            type: DataTypes.UUID
        },
        password: {
            allowNull: false,
            type: DataTypes.CHAR(64),
            
        },
        expiresAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        createdAt: {
           allowNull: false,
           type: DataTypes.DATE,

        }
    }, {
        charset: "UTF8",
        
    })
}


module.exports.down  = queryInterface => queryInterface.dropTable("userSessions")