const Sequelize=require('sequelize')
//Generar conexion param1=nombreBD, param2=usuario param3=password
const sequelize= new Sequelize('equipoDinamita','user1','root',{
    dialect: 'mysql',
    host: '107.22.139.108',
    define: {
        //No coloques ni el createdAt y el updatedAt
        timestamps: false,
        //Evitar plural
        freezeTableName: true
    }
})

/*CREATE TABLE videojuego(
    id int primary key,
     nombre varchar(30), 
     consola varchar(20));*/

const Usuario = sequelize.define('usuario0',{
    nombreUsuario:{
        type: Sequelize.STRING(30),
        allowNull: false,
        primaryKey: true
    },
    password:{
        type: Sequelize.STRING(15),
        allowNull:false
    }
})



sequelize.sync()
    .then(resultado=>{
        console.log('Conexion exitosa')
        //CRUD CREATE READ UPDATE DELETE
        //CREATE  INSERT INTO
        Usuario.create({
            nombreUsuario: 'iadm3',
            password: "root"      
        })
        .then(resultado=>{
            console.log("Registro exitoso")
            Usuario.findAll()
                .then(resultado=>console.log(resultado))
                .catch(error=>console.log(error))
        })
        .catch(error=>console.log(error))

        //READ SELECT * from <tabla>
        /*Usuario.findAll()
         .then(resultado=>console.log(resultado))
         .catch(error=>console.log(error))*/

         //DELETE
         Usuario.destroy({
             where:{
                nombreUsuario:'iadm2'                
             }
         })
            .then(res=>console.log("Registro eliminado"))
            .catch(err=>console.log(err))
        
        sequelize.query('SELECT * FROM usuario',{
            type:Sequelize.QueryTypes.SELECT
        })
            .then(usuarios=>console.log(usuarios))
            .catch(err=>console.log(err))
        //UPDATE
        Usuario.update({nombreUsuario:"IADM"},{
            where:{
                nombreUsuario:"iadm"
            }
        })
            .then(()=>console.log("Usuario actualizado"))
            .catch(err=>console.log(err))

    })
    .catch(error=>console.log(error))


