import axios from "axios";

const api = axios.create({
    baseURL: "https://api-financeiro-9wbe.onrender.com"
})
export default api;
