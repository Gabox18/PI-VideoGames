import React from "react";


function CardGames(props){
    return(
        <div>
            <div><img src={props.img} alt="cover" width='220px' height='250px'/></div>{/* comentado mientras tien estilo y paguinado*/}
            <h3>{props.name}</h3>
            <div>{props.genres?.map((genre,index)=>{
                return<h5 key={index}>{genre}</h5>
            })}</div>
        </div>
    )
}

export default CardGames