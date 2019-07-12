const processQuotes = quotes => {
  const quotesById = {};

  const allIds = quotes.map(quote => {
    const { id } = quote;

    quotesById[id] = quote;

    const baseCurrency = id.slice(0, 3).toUpperCase();
    const quoteCurrency = id.slice(3, 6).toUpperCase();

    quotesById[id]["baseCurrency"] = baseCurrency;
    quotesById[id]["quoteCurrency"] = quoteCurrency;
    quotesById[id]["pair"] = `${baseCurrency} ${quoteCurrency}`;

    return id;
  });

  return {
    byId: quotesById,
    allIds
  };
};

export function createQuotes(quotes) {
  return processQuotes(quotes);
}
