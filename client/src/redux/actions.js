import axios from "axios";

export const GET_ALL_GAMES = 'GET_ALL_GAMES'
export const FILTER_GENRES = 'FILTER_GENRES'
export const FILTER_DB = 'FILTER_DB'
export const DETAIL_GAMES = 'DETAIL_GAMES'
export const ORDER_GAMES_BY = 'ORDER_GAMES_BY'
export const GET_GENRES = 'GET_GENRES'
export const CREATE_GAME = 'CREATE_GAME'


export const getAllGames = () => {
    return async function (dispatch) {
      return fetch('http://localhost:3001/videogames')
      .then((res)=>res.json())
      .then((res_json) =>{
        dispatch({type: GET_ALL_GAMES,
                  payload: res_json})
      })
    };
  };

export const gamesDetail = (id) => {
  return async function(dispatch){
      let response = await axios.get(`http://localhost:3001/videogames/${id}`)
      return dispatch({
        type: DETAIL_GAMES,
        payload: response.data
      })
  }
}

export const getGenres = () => {
  return async function(dispatch){
      let response = await axios.get(`http://localhost:3001/genres`)
      return dispatch({
        type: GET_GENRES,
        payload: response.data
      })
  }
}

export const createGame = (objGame) => {
  return async function(dispatch){
      let response = await axios.post(`http://localhost:3001/videogames`,objGame)
      return dispatch({
        type: CREATE_GAME,
        payload: response.data
      })
  }
}

export const filterGenres = (genre) =>{
  return{
    type: FILTER_GENRES,
    payload : genre
  }
}

export const filterDb = (gamesDB) =>{
  return{
    type: FILTER_DB,
    payload : gamesDB
  }
}

export const orderGamesBy = (typeOrder) =>{
  return{
    type : ORDER_GAMES_BY,
    payload : typeOrder
  }
}
