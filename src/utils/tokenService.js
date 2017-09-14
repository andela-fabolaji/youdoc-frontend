import jwtDecode from 'jwt-decode';

const getToken = () => {
  return localStorage.getItem('token');
};

const getDecodedToken = () => {
  return jwtDecode(getToken('token'));
};

const setToken = token => {
  return localStorage.setItem('token', token);
};

export default {
  getToken,
  getDecodedToken,
  setToken
};
