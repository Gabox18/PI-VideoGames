import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom"
import {getAllGames,getGenres} from '../../redux/actions.js'
import CardGames from "../cardGames/cardGames.jsx"
import Paginado from "../paginado/paginado.jsx"
import './home.css'

import Navbar from "../nav/nav.jsx"


function Home (props){
    const allGames = useSelector((state)=>state.games)
    const dispatch = useDispatch()

    //-----------------logica paguinado------------------------
    const [paginaActual,setPaginaActual] = useState(1)
    //const [juegosPorPagina,setJuegosPorpagina] = useState(15)
    const juegosPorPagina = 15
    const indexUltimoJuego = paginaActual * juegosPorPagina
    const indexPrimerJuego = indexUltimoJuego - juegosPorPagina
    const juegosActuales = allGames?.slice(indexPrimerJuego,indexUltimoJuego)

    const paginado = (numeroDePagina)=>{
        setPaginaActual(numeroDePagina)
    }

    //-----------------logica paginado------------------------
    useEffect(()=>{
        if(!juegosActuales.length){
            setTimeout(()=>{
                dispatch(getAllGames())
                dispatch(getGenres())
            },7000)
            
        }
     
    },[dispatch, juegosActuales.length])
  
    return(
        <div>
            <Navbar paginado={setPaginaActual}/>
            <div className="div_Home">
                {juegosActuales.map((e)=>{
                    return (
                       <div key={e.id}>
                        <Link to={`home/videogames/${e.id}`} > 
                             <CardGames name={e.name} img={e.background_image} genres ={e.genres?.map(g=>g.name)}/>
                        </Link>
                       </div>)
                })}
            </div>
            <Paginado juegosPorPagina={juegosPorPagina} allGames={allGames.length} paginado={paginado}/>
        </div>
    )
}

export default Home