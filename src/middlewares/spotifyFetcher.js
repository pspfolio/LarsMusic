export default getStore => (url, opts) => {
  const headers = {
    authorization: `Bearer ${getStore().auth.access_token}`
  };

  return fetch(`https://api.spotify.com/v1/${url}`, {
    headers: {
      ...headers,
      ...opts
    }
  })
    .then(res => {
      console.log('res', res);
      // check if 401 get new accessToken
      return res.json();
    })
    .catch(error => {
      console.log('error', error);
    });
};
