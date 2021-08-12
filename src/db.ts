import { Catalog,Game } from './types';

//Cargar el archivo games.json y tiparlo de tipo Catalog
export const catalogo: Catalog = require("../data/games.json");



export function getGame(id:number): Game {
    const juego = catalogo.games.find( juego => juego.id === id);
    if (!juego){
        throw new Error(`No existe el juego con id ${id}`)
    }
    return juego;
}