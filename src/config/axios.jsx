import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'https://backend-prueba-tecnica-280s.onrender.com/api'
})

export default clienteAxios
