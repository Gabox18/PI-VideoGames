import React, { useEffect } from "react";

let imgAux = `https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/118011151_640719076574401_1551517471314191853_n.png?
_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qVXZokCTiqsAX-lOWpd&_nc_ht=scontent-mia3-1.xx&oh=00_AT8AbAqGGx1fcjNOi-8D9
mtrfMd3RAvfJ5vTz5fHZXQzEQ&oe=63079422`

function ViewCreate (props){ 
    useEffect(()=>{
        return()=>{
            props.setForm({
                name: "",
                description:"",
                //released:currentDate,
                rating:0,
                platform:[],
                gender:[],
                background_image:""
            })
        }
    },[])
    return(
        <div>
            <h2>{props.name}</h2>
            <img src={props.background_image || imgAux} width='440px' height='500' alt="Cover Game" />

            <div>
                {props.genres?.map((e, i)=>{
                    return(
                        <p key={i}>{e}</p>
                    )
                })}
            </div>

            <div>
                <p>{props.description}</p>
            </div>

            <div>
                <p>{props.rating}</p>
            </div>
            
            {props.platform?.map((e, i)=>{
                return(
                    <p key={i}>{e}</p>
                )
            })}

            <button onClick={()=>props.setRenderDetails(false)}>Cargar Otro Juego</button>
        </div>
    )
}

export default ViewCreate