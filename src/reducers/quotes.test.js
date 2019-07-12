import {
  QUOTES_LOADING,
  QUOTES_LOADED,
  QUOTES_UPDATE
} from "../actions/actionTypes";

import quotesReducer from "./quotes";
import initialState from "./quotesInitialState";

describe("quotes reducer", () => {
  it("should return the initial state", () => {
    expect(quotesReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle QUOTES_LOADING", () => {
    const action = {
      type: QUOTES_LOADING
    };
    const expectedState = {
      ...initialState,
      isFetching: true
    };

    expect(quotesReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle QUOTES_LOADED", () => {
    const action = {
      type: QUOTES_LOADED
    };
    const expectedState = {
      ...initialState,
      isFetching: false
    };

    expect(quotesReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle QUOTES_UPDATE", () => {
    const data = {
      byId: {
        "1": {
          id: "1"
        }
      },
      allIds: ["1"]
    };
    const action = {
      type: QUOTES_UPDATE,
      ...data
    };
    const expectedState = {
      ...initialState,
      ...data
    };

    expect(quotesReducer(initialState, action)).toEqual(expectedState);
  });
});
