import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {gamesDetail} from '../../redux/actions.js'

function Detail (props){
    let {id} = useParams()
    let detailGame = useSelector(state=>state.gamesDetail)
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(gamesDetail(id))
    },[dispatch,id])
    console.log(id)
    console.log(detailGame)
    return(
        <div>
            <h2>{detailGame.name}</h2>
            <img src={detailGame.background_image} width='440px' height='500' alt="Cover Game" />

            <div>
                {detailGame.genres?.map((e, i)=>{
                    return(
                        <p key={i}>{e.name}</p>
                    )
                })}
            </div>

            <div>
                <p>{detailGame.description}</p>
            </div>

            <div>
                <p>{detailGame.rating}</p>
            </div>
            
            {detailGame.platforms?.map((e, i)=>{
                return(
                    <p key={i}>{e}</p>
                )
            })}

            <Link to='/home'>inicio</Link>
        </div>
    )
}

export default Detail