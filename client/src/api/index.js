import axios from "axios";

const API = axios.create({ baseURL: "https://mini-social-network.vercel.app/api/" });

//  changethe baseURL to this if you want to run the app locally

//  baseURL: "http://localhost:2000/api/" });

//  https://mini-social-network.vercel.app/api/

export default API;
