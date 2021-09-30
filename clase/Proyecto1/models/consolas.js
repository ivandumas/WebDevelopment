const Sequelize = require("sequelize")

const Consola = (sequelize)=>{
    sequelize.define('consola',{
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre:{
            type: Sequelize.STRING(30),
            allowNull:false
        }
    })
}

module.exports = Consola