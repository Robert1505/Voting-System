import axios from 'axios';

export default axios.create({
    ///baseURL: 'http://localhost:5000',
     baseURL: 'https://app-vote-server.herokuapp.com'
})