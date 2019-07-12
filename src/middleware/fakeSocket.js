import { createFakeQuote } from "../components/utils/dataGenerator";
import { createQuotes } from "../transformers/quotes";
import { createTiles } from "../transformers/tiles";
import {
  TILES_SET,
  QUOTES_UPDATE,
  QUOTES_LOADING,
  QUOTES_LOADED
} from "../actions/actionTypes";
import config from "../config/default";

export default store => next => action => {
  switch (action.type) {
    case "OPEN_STREAM":
      // create a loading state
      store.dispatch({ type: QUOTES_LOADING });

      setInterval(() => {
        // we are getting quotes in the stream
        const data = config.supportedQuoteIds.map(id => {
          return createFakeQuote(id);
        });

        // and then processing to make it easier for us to store and manupilate (assuming that the stream does not provide the data structure)
        const quotes = createQuotes(data);

        store.dispatch({ type: QUOTES_UPDATE, ...quotes });
      }, 500);

      setTimeout(() => {
        // same situation, let's transform the data structure to make our lifes easier
        const tiles = createTiles(config.supportedTiles);

        store.dispatch({ type: TILES_SET, ...tiles });
        // ... and show some data now
        store.dispatch({ type: QUOTES_LOADED });
      }, 1000);
      break;
    default:
      break;
  }

  return next(action);
};
