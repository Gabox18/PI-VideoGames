import {GET_ALL_GAMES,FILTER_GENRES,FILTER_DB,DETAIL_GAMES,ORDER_GAMES_BY
,GET_GENRES,CREATE_GAME} from './actions'

import ordering from '../Ordenamiento_js/Ordenamiento';

const initialState = {
    games: [],
    gamesCopy: [],
    gamesDetail: {},
    AllGenres:[]

  };
  
  const rootReducer = (state = initialState, action) => {
    const auxAllGames = state.gamesCopy;

    switch (action.type) {
      case GET_ALL_GAMES:
        return {
          ...state,
          games: action.payload,
          gamesCopy: action.payload,
        };

      case GET_GENRES:
        return {
          ...state,
          AllGenres: action.payload,
        };

      case DETAIL_GAMES:
        return {
          ...state,
          gamesDetail: action.payload,
        };

      case FILTER_GENRES:
        return {
          ...state,
          games: action.payload !=='Filtrar por'
          ? auxAllGames.filter((e) => e.genres?.includes(action.payload))
          : state.games
        };

      case FILTER_DB:
        let dbFilter = auxAllGames.filter((e) => e.createdInDb === true);
        return {
          ...state,
          games: dbFilter,
        };

      case ORDER_GAMES_BY:
        return {
          ...state,
          games: ordering(auxAllGames, action.payload).map((e) => e),
        };

      case CREATE_GAME :
        return{
          ...state,
          games:[[action.payload],...state.gamesCopy]
        }

      default:
        return { ...state };
    }
  };
  
  export default rootReducer;