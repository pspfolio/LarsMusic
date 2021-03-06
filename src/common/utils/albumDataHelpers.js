import mapKeys from 'lodash/mapKeys';

export const normalizeAlbumData = albums => {
  const normalizedData = albums.map(item => ({
    ...item,
    artists: item.artists.map(artist => artist.id),
    tracks: []
  }));

  const data = mapKeys(normalizedData, 'id');

  return data;
};
