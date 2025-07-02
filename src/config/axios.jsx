import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'https://backend-prueba-tecnica-280s.onrender.com'
})

export default clienteAxios
