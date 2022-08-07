/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Paginado (props){
    const numeroDepagina = []
    
    for (let i=0; i<Math.ceil(props.allGames/props.juegosPorPagina) ; i++) {
        numeroDepagina.push(i+1)
    }

    return(
        <footer>
            <ul>
                {numeroDepagina?.map(numeroPagi=>{
                    return(
                            <button key={numeroPagi} onClick={()=>{props.paginado(numeroPagi)}}>{numeroPagi}</button>
                    ) 
                })}
            </ul>
        </footer>
    )
}

export default Paginado