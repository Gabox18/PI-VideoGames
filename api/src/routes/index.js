// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Router } = require('express');
const roterGames = require('./routeGames.js')
const routerGenres = require('./routerGenres.js')
const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames',roterGames)
router.use('/genres',routerGenres)

module.exports = router;
