const express = require("express");
const app = express();
const path = require("path")

app.use(express.static(path.resolve(__dirname,"../public")))
app.use(express.static(path.resolve(__dirname,"./views")))

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log("El server escucha en el puerto http://localhost:" + port)
});

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/index.html"))
})
app.get("/register.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/register.html"))
})

app.get("/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/login.html"))
})

