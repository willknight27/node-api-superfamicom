import {catalogo, getGame} from './db'
import express = require('express');


const app = express();
const port= 8080;

/*
app.get('/',(req,res)=>{
    res.send("Hola desde typescript")
});
*/


// listado de todos los juegos de super Famicom
app.get('/sfc-list',(req,res)=>{
    res.send(catalogo)
});

// Busqueda del juego por su id
app.get('/game/:id',(req,res)=>{
    try {
        let juego = getGame(parseInt(req.params.id));
        res.send(juego);
    } catch (e) {
        res.status(400).json({
            error:`No existe el juego con id ${req.params.id}`
        });
    }
    
});

app.listen(port);