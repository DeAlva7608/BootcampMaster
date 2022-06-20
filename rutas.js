const express = require("express");
const userSchema = require("../models/users");
const router = express.Router();


//crear registro

router.post('/users',(req,res) => 
{
 
    const user= userSchema(req,body);
    user
     .save()
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message: error}));

 

});

// Ruta para Consulta todos registros
router.get('/users',(req,res) => 
{
 
    userSchema
     .find()
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message: error}));

 

});

// Ruta para Consulta de un registro por ID
router.get('/users/:id',(req,res) => 
{
    const { id } = req.params;
    userSchema
     .findById(id)
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message: error}));

 

});

// Ruta para Actualizar un registro en la base

router.put('/users/:id',(req,res) => 
{
    const { id } = req.params;
    const { NombreJuego,Tipo }=req.body;
    userSchema
     .updateOne({_id: id},{$set:{NombreJuego,Tipo}})
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message: error}));

 

});

// Ruta para borrar un registro en la base de datos

router.delete('/users/:id',(req,res) => 
{
    const { id } = req.params;
   
    userSchema
     .remove({_id: id})
     .then((data)=>res.json(data))
     .catch((error)=>res.json({message: error}));

 

});





module.exports = router;



