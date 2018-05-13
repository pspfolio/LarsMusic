export const fetchSpotify = (url, accessToken) => {
  return fetch(url, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`
    })
  });
};
