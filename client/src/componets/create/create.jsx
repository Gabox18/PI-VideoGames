import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getGenres,createGame} from "../../redux/actions.js"
 
function CreateGame(props){

    let date = new Date();
    let currentDate = date.toISOString().split('T')[0] //estado inicial sera la fecha del equipo
    const dispatch = useDispatch();
    const platforms = ['PC', 'PlayStation 5', 'Xbox One', 'PlayStation 4', 'Xbox Series S/X', 'Nintendo Switch', 'iOS', 'Android', 'Nintendo 3DS', 'Nintendo DS', 'Nintendo DSi', 'macOS'];
    const genres = useSelector(state=>state.AllGenres)
    useEffect(()=>{
        dispatch(getGenres())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const [form, setForm] = React.useState({
        name: "",
        description:"",
        released:currentDate,
        rating:0,
        platform:[],
        gender:[],
        //background_image:""
    });
 
    const handleInputChange = function(e) {

        if(e.target.name === "gender" || e.target.name === "platform"){
            setForm({
                ...form,
                [e.target.name] : [...form[e.target.name],e.target.value]
            })
        } else {
            setForm({
            ...form,
            [e.target.name]: e.target.value
       })}
    }
 
    const handleSubmit = function(e) {
       e.preventDefault();
       console.log(form)
       alert('Juego Creado Correctamente')
       setForm({
            name: "",
            description:"",
            released:currentDate,
            rating:0,
            platform:[],
            gender:[],
            background_image:""
        })
       dispatch(createGame(form));
    }

    return(
        <div>
            <h2>Cargar Datos del Juego</h2>
            
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label htmlFor="name_l">Nombre: </label>
                <input type="text" name="name" id="name_l" onChange={(e) =>handleInputChange(e)} value={form.name} />
 
                <label htmlFor="description_l">Descripcion: </label>
                <textarea name="description" id="description_l" onChange={(e) =>handleInputChange(e)} value={form.description} ></textarea>

                <label htmlFor="released_l">Fecha de Lanzamiento: </label>
                <input type="date" name="released" id="released_l" onChange={(e) =>handleInputChange(e)} value={form.released}  min="1980-01-01" max="2030-12-31"></input>

                <label htmlFor="rating_l">Rating: </label>
                <input type="number" name="rating" id="rating_l" onChange={(e) =>handleInputChange(e)} value={form.rating} />

 
                <div>
                    <h3 >Elige las plataforma</h3>
                    {platforms?.map((platform, index) => (
                        <div key={platform}>
                            <input type="checkbox" name="platform" id={index} value={platform} onChange={(e) => handleInputChange(e)} />
                            <label htmlFor={index}>{platform}</label>
                        </div>
                    ))}
                </div>

                <div>
                    <h3 >Elige los generos</h3>
                    {genres?.map((genre) => (
                        <div key={genre}>
                            <input type="checkbox" name="gender" id={genre} value={genre} onChange={(e) => handleInputChange(e)} />
                            <label htmlFor={genre}>{genre}</label>
                        </div>
                    ))}
                </div>
       
                <label htmlFor="background_image_l">Imagen: </label>
                <input type="text" name="background_image" id="background_image_l" onChange={(e) =>handleInputChange(e)} value={form.price} />

                <button type='submit' onClick={(e)=>handleSubmit(e)}>Cargar Juego</button>
            </form>


            <Link to='/home'>inicio</Link>
        </div>
    )
}

export default CreateGame
