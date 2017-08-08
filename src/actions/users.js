import axios from 'axios';

export const fetchUsers = () => {
  return {
    type: 'USERS_FETCH',
    payload: axios.get(`https://jsonplaceholder.typicode.com/users`)
  }
}
