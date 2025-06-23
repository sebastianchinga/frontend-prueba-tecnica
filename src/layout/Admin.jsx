import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Admin = () => {
    const { auth, cargando } = useAuth();

    if (cargando) return 'Cargando...';
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Gestor de Tareas</h1>

            {/* Contenedor principal */}
            {auth?.id ? (<Outlet />) : <Navigate to="/" />}
        </div>
    )
}

export default Admin