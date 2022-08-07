import { Link } from 'react-router-dom'
import imgLanding from '../../img/videogame.png'

import {getAllGames,getGenres} from '../../redux/actions.js'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'

function LandingPage(props){

    //let allGames = useSelector((state)=>state.AllGenres)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllGames())
        dispatch(getGenres())
        //console.log(allGames)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])  
    return (
        <div>
            <h1>Henry Videogames</h1>
            <Link to={'/home'}><button>Start Game</button></Link>
            <img src={imgLanding} alt="fondo" />
        </div>
    )
}

export default LandingPage