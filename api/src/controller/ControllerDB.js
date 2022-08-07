
const { Videogame , Genre } = require('../db.js')

const createGenresDB = async(arrGenres)=>{
    arrGenres.forEach( genre => {
        Genre.findOrCreate({
         where:{name :genre}
         })
        });
}

const getGenresDB = async ()=> {
    let allGenres = await Genre.findAll()

    return allGenres.map(e=>e.name).toString().trim().split(',')
}

const getGamesDB = async ()=> {
    let gameDB = await Videogame.findAll({
        include:{
            model: Genre,
            attributes:['name'],
            through: {
                attributes: []
            }
        }
    })

    let gameDbFormat = gameDB.map(e =>{
        return {
            id : e.id,
            name  : e.name,
            description : e.description,
            released : e.released,
            rating: e.rating,
            platform : e.platform,
            background_image : e.background_image,
            createdInDb : e.createdInDb,
            genres : e.genres.map(e=>e.name)
        }
    })

    return gameDbFormat
}

const createGameDB = async (name,description,released,rating,platform,gender,background_image,createdInDb) =>{
    let creategame = await Videogame.create({
        name,
        description,
        released,
        rating,
        platform,
        background_image,
        createdInDb
    })

    let genresDB = await Genre.findAll({
        where:{name : gender} 
    })

    await creategame.addGenre(genresDB)
    return await Videogame.findAll({
        where:{name : name} ,
        include:{
            model: Genre,
            attributes:['name'],
            through: {
                attributes: []
            }
        }
    })
}

const searchGameDB = async (id , name) =>{
    if(id){
        let game = await Videogame.findAll({
            where:{id : id} ,
            include:{
                model: Genre,
                attributes:['name'],
                through: {
                    attributes: []
                }
            }
        })
        return game[0]
    }else{
        return await Videogame.findAll({
            where:{name : name} ,
            include:{
                model: Genre,
                attributes:['name'],
                through: {
                    attributes: []
                }
            }
        })
    }
}

module.exports = {
    createGenresDB,
    getGenresDB,
    getGamesDB,
    createGameDB,
    searchGameDB
}