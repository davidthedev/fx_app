export const createTiles = tiles => {
  const tilesById = {};

  const allIds = tiles.map(tile => {
    const id = tile.id;
    tilesById[id] = tile;

    return id;
  });

  return {
    byId: tilesById,
    allIds
  };
};
