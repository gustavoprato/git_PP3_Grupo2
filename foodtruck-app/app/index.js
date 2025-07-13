import express from "express";
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//SERVER
const app = express();
app.set("port",4000);
app.listen(app.get("port"))
console.log("Servidor corriento en puerto",app.get("port"))

//CONFIGURACION
app.use(express.static(__dirname + "/public"))

//RUTAS
app.get("/",(req,res)=> res.sendFile(__dirname + "/pages/mitienda.html")) //<-- Pagina Principal "LA CASONA TRUCK"

app.get("/login",(req,res)=> res.sendFile(__dirname + "/pages/login.html")) //<-- Pagina de Inicio de Sesion

app.get("/register",(req,res)=> res.sendFile(__dirname + "/pages/register.html")) //<-- Pagina de Registro

app.get("/producto1",(req,res)=> res.sendFile(__dirname + "/pages/producto1.html")) //<-- 

app.get("/producto2",(req,res)=> res.sendFile(__dirname + "/pages/producto2.html")) //<-- 

app.get("/producto3",(req,res)=> res.sendFile(__dirname + "/pages/producto3.html")) //<-- 

app.get("/producto4",(req,res)=> res.sendFile(__dirname + "/pages/producto4.html")) //<-- 

app.get("/producto5",(req,res)=> res.sendFile(__dirname + "/pages/producto5.html")) //<-- 

app.get("/producto6",(req,res)=> res.sendFile(__dirname + "/pages/producto6.html")) //<-- 