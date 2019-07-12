import { TILES_UPDATE_BY_ID, TILES_SET_BY_ID } from "./actionTypes";

const addTileById = (tileId, quoteId) => {
  return {
    type: TILES_SET_BY_ID,
    tile: {
      id: tileId,
      quoteId
    }
  };
};

export const updateTileById = (tileId, quoteId) => {
  return {
    type: TILES_UPDATE_BY_ID,
    tile: {
      id: tileId,
      quoteId
    }
  };
};

export const addTile = quoteId => {
  return (dispatch, getState) => {
    // get the last num in state to generate the next id - very hacky
    const lastId = getState().tiles.allIds[getState().tiles.allIds.length - 1];
    const id = (parseInt(lastId) + 1).toString();

    dispatch(addTileById(id, quoteId));
  };
};
