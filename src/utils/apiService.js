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
};

export default apiService;
