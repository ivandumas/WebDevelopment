function applyRelationship(sequelize) {
    //imprimir los modelos adheridos al objeto de con
    console.log(sequelize.models)
    const Videojuego = sequelize.models.videojuego
    const Consola = sequelize.models.consola
    const ConsolaVideojuego = sequelize.models.consolaVideojuego

    //Un videojuego puede jugarse en una o muchas consolas
    Videojuego.belongsToMany(Consola,{through:ConsolaVideojuego}) //Crea una tabla intermedia y genera la llave foranea dentro de ella
    //Una consola tiene uno o muchos videojuegos
    Consola.belongsToMany(Videojuego,{through:ConsolaVideojuego}) //Crea una tabla intermedia y genera la llave foranea dentro de ella

    //Si tuvieras una relacion uno a muchos
    /*Supuesto obtener una tabla trofeo 
    un videojuego puede tener muchos trofeos
    PERO un trofeo solo pertenece a un videojuego*/

    /* uno a muchos
    Videojuego.hasMany(Trofeo)
    */

    /* muchos a uno
    Trofeo.belongsToMany(Videojuego)
    */
}


module.exports = {applyRelationship}