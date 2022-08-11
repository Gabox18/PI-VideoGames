
const axios = require('axios')
require('dotenv').config();
const {API_KEY} = process.env;
const {createGenresDB, getGenresDB,createGameDB,getGamesDB,searchGameDB} = require('./ControllerDB.js')
const {data} = require('../../../client/data.js')
  


const getGames = async () => { //obtiene los primeros 100 juegos
    let fullGames= []
    let response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
  if (response.data.results) {
    for(let i = 0; fullGames.length<100; i++){
        Games = response.data.results.map((game) => {
            return {
              id: game.id,
              name: game.name,
              background_image: game.background_image,
              rating : game.rating,
              genres: game.genres.map((g) => g.name),
            };
          });
          response = await axios.get(response.data.next)
          fullGames = [...fullGames,...Games]
    }
    let gameDB = await getGamesDB()
    fullGames = [...gameDB,...fullGames]
    return fullGames.slice(0,100);
}
//return data
};

const getSearchGame = async (nameGame) => { //busca por nombre
    let gamesSearch = []
    let response = await axios.get(`https://api.rawg.io/api/games?search=${nameGame}?&key=${API_KEY}`)
    if (response.data.results){
        gamesSearch = response.data.results.map((game)=>{
            return{
                id: game.id,
                name: game.name,
                genres: game.genres.map((g) => g.name),
                //background_image: game.background_image,
                //rating: game.rating,
            }
        }).slice(0,15)
    }
    let gamesSearchDB = await searchGameDB(null,nameGame)
    return [...gamesSearchDB,...gamesSearch];
}

const getDetaills = async (id) =>{ //busca detalle por id
    if(Number(id)){
    let response = await axios.get(`https://api.rawg.io/api/games/${id}?&key=${API_KEY}`);
    let gamefilter = {
        name : response.data.name,
        background_image : response.data.background_image,
        description:response.data.description_raw,
        released: response.data.released,
        rating: response.data.rating,
        platform: response.data.platforms.map(p => p.platform.name),
        genres : response.data.genres.map((g) =>{
            return{
                name: g.name
            }
        })
    }
        return gamefilter
    }else{
         return await searchGameDB(id,null)
    }
};

 const postGames = async (name,description,released,rating,platform,gender,background_image,createdInDb) => { // crea un juego
    return await createGameDB(name,description,released,rating,platform,gender,background_image,createdInDb)
 }

const getGenres = async() => { // carga los generos en la DB
    let response = await axios.get(`https://api.rawg.io/api/genres?&key=${API_KEY}`)
    let generos = response.data.results.map(genre=>{
         return genre.name
    })
    await createGenresDB(generos)
    const allGenres = await getGenresDB()
    return allGenres
}

module.exports = {
    getGames,
    getSearchGame,
    getDetaills,
    getGenres,
    postGames
}

//https://api.rawg.io/api/games?search=halo?&key=beb22d5f42d3447994073bcceb8c22e2
//https://api.rawg.io/api/games/3498?&key=beb22d5f42d3447994073bcceb8c22e2