import {
  QUOTES_LOADING,
  QUOTES_LOADED,
  QUOTES_UPDATE
} from "../actions/actionTypes";
import initialState from "./quotesInitialState";

const quotes = (state = initialState, action) => {
  switch (action.type) {
    case QUOTES_LOADING: {
      return {
        ...state,
        isFetching: true
      };
    }
    case QUOTES_LOADED: {
      return {
        ...state,
        isFetching: false
      };
    }
    case QUOTES_UPDATE: {
      return {
        ...state,
        byId: action.byId,
        allIds: action.allIds
      };
    }
    default:
      return state;
  }
};

export default quotes;
