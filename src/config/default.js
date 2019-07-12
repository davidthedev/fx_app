const defaultQuoteId = "usdusd";
const firstTileQuoteId = "gbpusd";

export default {
  defaultQuoteId,
  supportedQuoteIds: [
    "usdchf",
    firstTileQuoteId,
    "gbpchf",
    "gbpgbp",
    defaultQuoteId,
    "usdjpy",
    "eurusd",
    "eursek",
    "chfsek"
  ],
  supportedTiles: [
    {
      id: "1",
      quoteId: firstTileQuoteId
    },
    {
      id: "2",
      quoteId: "chfsek"
    },
    {
      id: "3",
      quoteId: "eursek"
    },
    {
      id: "4",
      quoteId: "usdjpy"
    }
  ]
};
