const path = require('path');
const express = require('express');

exports.getForma = (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/forma.html'))
    //res.send("Formulario")
} 

exports.postValidar = (req,res)=>{
    console.log(req.body)
    res.send('Validacion')
    let const1 = req.query.nombre;
    let const2 = req.query.apellido;
    let const3 = req.query.mail;
    let const4 = req.query.contraseña;

    console.log("Nombre: "+const1+" Apellido: "+const2+" Correo: "+const3 +" Contraseña: "+const4)
}