import axios from 'axios';

const API = axios.create({ baseURL: "https://mini-social-network.vercel.app/api/" });


export default API;
