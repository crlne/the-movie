import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'a2ed0c7d7686600b5c6dfb1218cbefe3'
    }
});

export default api;