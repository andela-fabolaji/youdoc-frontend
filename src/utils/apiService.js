import axios from 'axios';

axios.defaults.baseURL = 'https://youdoc.herokuapp.com';

const apiService = {
  signUp(payload) {
    return axios.post('/users', payload)
      .then(
        response => response,
        error => error.response
      );
  },
  signIn(payload) {
    return axios.post('/users', payload)
      .then(response => {
        console.log(response);
      });
  }
};

export default apiService;
