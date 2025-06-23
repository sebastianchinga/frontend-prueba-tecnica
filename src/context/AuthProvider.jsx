import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                return setCargando(false)
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await clienteAxios('/usuarios/perfil', config);
                setAuth(data)
                
            } catch (error) {
                setAuth({})
            }

            setCargando(false);
        }

        autenticarUsuario();
    },[])

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        setAuth({});
        useNavigate('/');
    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                cargando,
                setAuth,
                cerrarSesion
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;