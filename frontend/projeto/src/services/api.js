import axios from 'axios';

const api = axios.create({
    baseURL: "https://projeto-production-f7e4.up.railway.app/api"
});
export default api;