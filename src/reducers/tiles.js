import {
  TILES_SET,
  TILES_UPDATE_BY_ID,
  TILES_SET_BY_ID
} from "../actions/actionTypes";
import initialState from "./tilesInitialState";

const tiles = (state = initialState, action) => {
  switch (action.type) {
    case TILES_SET: {
      return {
        byId: action.byId,
        allIds: action.allIds
      };
    }
    case TILES_SET_BY_ID: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.tile.id]: action.tile
        },
        allIds: [...state.allIds, action.tile.id]
      };
    }
    case TILES_UPDATE_BY_ID: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.tile.id]: action.tile
        }
      };
    }
    default:
      return state;
  }
};

export default tiles;
