import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { filterGenres,filterDb, orderGamesBy,getAllGames} from "../../redux/actions";

function Navbar(props) {
  const AllGenres = useSelector((state) => state.AllGenres);
  const dispatch = useDispatch();

  function handleSelectFilter(e) {
    e.target.value === "createdInDb"
      ? dispatch(filterDb(e.target.value)) && props.paginado(1)
      : dispatch(filterGenres(e.target.value)) && props.paginado(1);
  }

  function handleSelectOrderBy(e) {
    dispatch(orderGamesBy(e.target.value));
    props.paginado(1);
  }

  return (
    <div>
      <label htmlFor="Ordenar">Ordenar por </label>
      <select id="Ordenar" onChange={(e) => handleSelectOrderBy(e)}>
        <optgroup label="alfabeto">
          <option value="asc_Alf">A - Z</option>
          <option value="des_Alf">Z - A</option>
        </optgroup>
        <optgroup label="Rating">
          <option value="asc_Rat">Ascendente</option>
          <option value="des_Rat">descendente</option>
        </optgroup>
      </select>

      <label htmlFor="Ordenar">Filtrar por </label>
      <select id="Ordenar" onChange={(e) => handleSelectFilter(e)}>
        <optgroup label="Mis Juegos">
          <option value="createdInDb">Creados</option>
        </optgroup>
        <optgroup label="Generos">
          {AllGenres?.map((genre, index) => {
            return (
              <option key={index} value={genre}>
                {genre}
              </option>
            );
          })}
        </optgroup>
      </select>
      <button onClick={() => dispatch(getAllGames())}>Mostrar Todos</button>
      <div>
        <Link to="/home/Create">
          <button>Cargar Juego</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar






// import React from "react";
// import { useDispatch} from "react-redux";
// import { Link } from "react-router-dom";
// import { filterGenres,filterDb, orderGamesBy} from "../../redux/actions";

// function Navbar(props){

//     const dispatch = useDispatch()
  
//     function handleSelectFilter (e){
//         e.target.value === 'createdInDb' ?
//         dispatch(filterDb(e.target.value)) && props.paginado(1) :
//         dispatch(filterGenres(e.target.value)) && props.paginado(1)
//     }

//     function handleSelectOrderBy (e){
//         dispatch(orderGamesBy(e.target.value)) 
//         props.paginado(1)
//     }

//     return(
//         <div>
//             <label htmlFor="Ordenar">Ordenar por </label>
//             <select id="Ordenar" onChange={(e)=>handleSelectOrderBy(e)}>
//                     <option value="todos">Todos</option>
//                 <optgroup label="alfabeto">       
//                     <option value="asc_Alf">A - Z</option>
//                     <option value="des_Alf">Z - A</option>
//                 </optgroup>
//                 <optgroup label="Rating">
//                     <option value="asc_Rat">Ascendente</option>
//                     <option value="des_Rat">descendente</option>
//                 </optgroup>

//             </select>

//             <label htmlFor="Ordenar">Filtrar por </label>
//             <select id="Ordenar" onChange={(e)=>handleSelectFilter(e)}>
//                     <option value="todos">Todos</option>
//                 <optgroup label="Mis Juegos">
//                     <option value="createdInDb">Creados</option>
//                 </optgroup>
//                     <optgroup label="Generos">
//                     <option value="Action">Action</option>
//                     <option value="Strategy">Strategy</option>
//                     <option value="Indie">Indie</option>
//                     <option value="RPG">RPG</option>
//                     <option value="Casual">Casual</option>
//                     <option value="Puzzle">Puzzle</option>
//                     <option value="Simulation">Simulation</option>
//                     <option value="Arcade">Arcade</option>
//                     <option value="Massively Multiplayer">Massively Multiplayer</option>
//                     <option value="Platformer">Platformer</option>
//                     <option value="Sports">Sports</option>
//                     <option value="Fighting">Fighting</option>
//                     <option value="Board Games">Board Games</option>
//                     <option value="Family">Family</option>
//                     <option value="Card">Card</option>
//                     <option value="Adventure">Adventure</option>
//                     <option value="Shooter">Shooter</option>
//                     <option value="Racing">Racing</option>
//                     <option value="Educational">Educational</option>
//                 </optgroup>
//             </select>
//             <div>
//                 <Link to='/home/Create'><button>Cargar Juego</button></Link>
//             </div>
//         </div>
//     )
// }

// export default Navbar
