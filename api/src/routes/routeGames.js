
const express = require('express');
const routerGames = express.Router();
const {getGames, getSearchGame, getDetaills,postGames} = require('../controller/Controller.js')

routerGames.get('/', async (req, res, next ) => {
    let {name} = req.query
    if(name){
        try {
            res.status(200).send( await getSearchGame(name));
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }else{
        try {
            res.status(200).send(await getGames());
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
    
})

routerGames.get('/:id', async (req,res)=>{
    let {id}= req.params
    if(id){
        try {
            res.status(200).send( await getDetaills(id));
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
})

routerGames.post('/', async (req,res)=>{
    let {name,description,released,rating,platform,gender,background_image,createdInDb}= req.body
    if(name){
        try {
            res.status(200).send( await postGames(name,description,released,rating,platform,gender,background_image,createdInDb));
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
})


module.exports = routerGames;


