import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:2000/api/" });


export default API;