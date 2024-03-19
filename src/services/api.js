import axios from "axios";

const api = axios.create({
    baseURL: "URL da API aqui",
    headers: { Accept: "application/json" }
})

export default api