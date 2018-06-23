export default getStore => (url, opts) => {
  console.log('MIDDLEWAREE storee', getStore());

  const headers = {
    authorization: `Bearer ${getStore().accessToken}`
  };

  const combinedOptions = { ...headers, ...opts };

  return fetch(`https://api.spotify.com/v1/${url}`, combinedOptions).then(res => {
    // check if 401 get new accessToken
    return res.json();
  });
};
