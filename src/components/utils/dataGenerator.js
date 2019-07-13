import { randomise } from "../utils/randomiser";

export const createFakeQuote = id => {
  const baseCurrency = id.slice(0, 3).toUpperCase();
  const quoteCurrency = id.slice(3, 6).toUpperCase();

  return {
    id,
    currencyPair: `${baseCurrency} ${quoteCurrency}`,
    baseCurrency,
    buyPrice: randomise(0.99143),
    quoteCurrency,
    sellPrice: randomise(0.99043)
  };
};

export const generate = () => {
  return [
    { pair: "USD CHF", buy: randomise(0.99143), sell: randomise(0.99043) },
    { pair: "GBP USD", buy: randomise(1.28495), sell: randomise(1.2836) },
    { pair: "GBP CHF", buy: randomise(1.27378), sell: randomise(1.27147) },
    { pair: "EUR SEK", buy: randomise(9.632), sell: randomise(9.6055) },
    { pair: "USD JPY", buy: randomise(110.467), sell: randomise(110.417) },
    { pair: "EUR JPY", buy: randomise(120.589), sell: randomise(120.491) }
  ];
};
