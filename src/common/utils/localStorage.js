export const loadPresistedTokens = () => {
  try {
    const serializedState = localStorage.getItem('tokens');
    if (serializedState === null) return undefined;

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveTokensState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tokens', serializedState);
  } catch (err) {}
};
