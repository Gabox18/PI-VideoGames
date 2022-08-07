const express = require('express');
const routerGenres = express.Router();
const {getGenres} = require('../controller/Controller.js')

routerGenres.get('/', async (req,res)=>{
    try{
        res.status(200).send(await getGenres())
    }catch(e){
        res.status(400).json({ error: e.message })
    }
})

module.exports = routerGenres