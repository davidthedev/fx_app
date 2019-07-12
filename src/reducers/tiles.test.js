import {
  TILES_SET,
  TILES_SET_BY_ID,
  TILES_UPDATE_BY_ID
} from "../actions/actionTypes";

import tilesReducer from "./tiles";
import initialState from "./tilesInitialState";

import { merge } from "lodash";

describe("tiles reducer", () => {
  it("should return the initial state", () => {
    expect(tilesReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle TILES_SET", () => {
    const data = {
      byId: {
        "1": {
          id: "1"
        }
      },
      allIds: ["1"]
    };
    const action = {
      type: TILES_SET,
      ...data
    };
    const expectedState = {
      ...data
    };

    expect(tilesReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle TILES_SET_BY_ID", () => {
    const data = {
      id: "1",
      quoteId: "q1"
    };
    const action = {
      type: TILES_SET_BY_ID,
      tile: {
        ...data
      }
    };
    const expectedState = {
      byId: {
        [data.id]: {
          ...data
        }
      },
      allIds: [data.id]
    };

    expect(tilesReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle TILES_UPDATE_BY_ID", () => {
    const data = {
      id: "1",
      quoteId: "q1"
    };
    const action = {
      type: TILES_UPDATE_BY_ID,
      tile: {
        ...data
      }
    };
    const expectedState = {
      ...initialState,
      byId: {
        [data.id]: {
          ...data
        }
      }
    };

    expect(tilesReducer(initialState, action)).toEqual(expectedState);
  });
});
