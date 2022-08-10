import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getGenres,createGame} from "../../redux/actions.js"
import validate from "../../Funciones_js/Validacion.js";
 
function CreateGame(props){

    let date = new Date();
    let currentDate = date.toISOString().split('T')[0] //estado inicial de la fecha del equipo
    const dispatch = useDispatch();
    const platforms = ['PC', 'PlayStation 5', 'Xbox One', 'PlayStation 4', 'Xbox Series S/X', 'Nintendo Switch', 'iOS', 'Android', 'Nintendo 3DS', 'Nintendo DS', 'Nintendo DSi', 'macOS'];
    const genres = useSelector(state=>state.AllGenres)
    useEffect(()=>{
        dispatch(getGenres())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
//-----------------------------------------estados locales---------------------------------------------
    const [form, setForm] = useState({
        name: "",
        description:"",
        released:currentDate,
        rating:0,
        platform:[],
        gender:[],
    });

 //-----------------------------------funciones handles-----------------------------------------------------
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
       let error = validate(form)
       if(Object.keys(error).length === 0){
        alert('Juego Creado Correctamente')
        console.log(validate(form))
        console.log(form)
        //dispatch(createGame(form));
        setForm({
            name: "",
            description:"",
            released:currentDate,
            rating:0,
            platform:[],
            gender:[],
            background_image:""
        })
       } else {
        alert('Completa los campos requeridos')
       }
       
       
    }
    return(
        <div>
            <h2>Cargar Datos del Juego</h2>
            
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label htmlFor="name_l">Nombre: </label>
                <input type="text" name="name" id="name_l" onChange={(e) =>handleInputChange(e)} value={form.name} />
                {validate(form).name?(<p className="danger">{validate(form).name}</p>):(<></>)}


                <label htmlFor="description_l">Descripcion: </label>
                <textarea name="description" id="description_l" onChange={(e) =>handleInputChange(e)} value={form.description} ></textarea>
                {validate(form).description?(<p className="danger">{validate(form).description}</p>):(<></>)}

                <label htmlFor="released_l">Fecha de Lanzamiento: </label>
                <input type="date" name="released" id="released_l" onChange={(e) =>handleInputChange(e)} value={form.released}  min="1980-01-01" max="2030-12-31"></input>

                <label htmlFor="rating_l">Rating: </label>
                <input type="number" name="rating" id="rating_l" onChange={(e) =>handleInputChange(e)} value={form.rating} />
                {validate(form).rating?(<p className="danger">{validate(form).rating}</p>):(<></>)}
 
                <div>
                    <h3 >Elige las plataforma</h3>
                    {platforms?.map((platform, index) => (
                        <div key={platform}>
                            <input type="checkbox" name="platform" id={index} value={platform} onChange={(e) => handleInputChange(e)} />
                            <label htmlFor={index}>{platform}</label>
                        </div>
                    ))}
                    {validate(form).platform?(<p className="danger">{validate(form).platform}</p>):(<></>)}
                </div>

                <div>
                    <h3 >Elige los generos</h3>
                    {genres?.map((genre) => (
                        <div key={genre}>
                            <input type="checkbox" name="gender" id={genre} value={genre} onChange={(e) => handleInputChange(e)} />
                            <label htmlFor={genre}>{genre}</label>
                        </div>
                    ))}
                    {validate(form).gender?(<p className="danger">{validate(form).gender}</p>):(<></>)}
                </div>
       
                <label htmlFor="background_image_l">Imagen: </label>
                <input type="text" name="background_image" id="background_image_l" onChange={(e) =>handleInputChange(e)} value={form.price} />

                <button type='submit' disabled={Object.keys(validate(form)).length === 0?false:true} onClick={(e)=>handleSubmit(e)}>Cargar Juego</button>
            </form>


            <Link to='/home'>inicio</Link>
        </div>
    )
}

export default CreateGame
