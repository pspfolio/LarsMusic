export const handleArtistData = artist => ({
  ...artist,
  followers: artist.followers['total'],
  external_urls: artist.external_urls['spotify'],
  topTracks: []
});
