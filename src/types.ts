export interface Game {
    id: number,
    release_date: string
    title: string
    publisher: string
    bit_memory: string
    price: number
}

export interface Catalog {
    name: string,
    games: Game[]
}