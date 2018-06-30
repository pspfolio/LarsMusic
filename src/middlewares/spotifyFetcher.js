export default getStore => (url, opts) => {
  const headers = {
    authorization: `Bearer ${getStore().accessToken}`
  };

  return fetch(`https://api.spotify.com/v1/${url}`, {
    headers: {
      ...headers,
      ...opts
    }
  }).then(res => {
    // check if 401 get new accessToken
    return res.json();
  });
};
