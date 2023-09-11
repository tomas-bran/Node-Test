const express = require("node:express")

const suma = require("./suma.js")

const app = express();

const puerto = 8080

app.listen(puerto,()=>{
    console.log(`Server escuchando en el puerto ${puerto}`)
});

app.get("/",(req,res)=>{
    res.send("Holaaaa");
})


suma(3,5)
