import jwtDecode from 'jwt-decode';

export const getToken = tokenName => localStorage.getItem(tokenName);

export const getDecodedToken = tokenName => jwtDecode(getToken(tokenName));

export const setToken = (token) => {
  localStorage.setItem(token);
  return true;
};