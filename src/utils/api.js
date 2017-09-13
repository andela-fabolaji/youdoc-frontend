import axios from 'axios';

axios.defaults.baseUrl = 'http://youdoc.herokuapp.com';

export default {
  signUp(payload) {
    axios.post('/users', payload)
      .then(user => {
        return user;
      })
      .catch(error => {
        return null;
      });
  },
};
