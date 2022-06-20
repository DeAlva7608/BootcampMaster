
//Paquetes y variables requeridos
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/rutas");


const app=express();
const port=process.env.PORT || 9000;

//Middleware
app.use(express.json());
app.use('/api',userRoutes);

//rutas
app.get("/",(req,res) => {
res.send("Ejemplo de uso de API");

});




app.listen(port,() => console.log('Server Escuchando en puerto',port))


app.get("/", (req, res) => {
  res.send("Escuchando Metodo Get")
})

// Conexión a Mongo 
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Conectado a MongoDB Test"))
.catch((error) => console.error(error));

app.listen(3000, () => console.log("Server ready"))

