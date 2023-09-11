const express = require("node:express")

const app = express();

const puerto = 8080

app.listen(puerto,()=>{
    console.log(`Server escuchando en el puerto ${puerto}`)
});

app.get("/",(req,res)=>{
    res.send("Holaaaa");
})

