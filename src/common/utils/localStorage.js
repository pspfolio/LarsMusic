export const loadAccessTokenState = () => {
  try {
    const serializedState = localStorage.getItem('access_token');
    if (serializedState === null) return undefined;

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveAccessTokenState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('access_token', serializedState);
  } catch (err) {}
};
