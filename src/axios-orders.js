import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7c324.firebaseio.com/'
});

export default instance;