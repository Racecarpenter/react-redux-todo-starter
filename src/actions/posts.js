import axios from 'axios';

export const fetchPost = () => {
  return {
    type: 'FETCH',
    payload: axios.get('https://jsonplaceholder.typicode.com/posts')
  }
}
