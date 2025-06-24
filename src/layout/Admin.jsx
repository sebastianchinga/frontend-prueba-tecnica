import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Admin = () => {
    const { auth, cargando, cerrarSesion } = useAuth();

    function obtenerIniciales(nombre) {
        return nombre.split(" ").map(letra => letra.charAt(0).toUpperCase()).join("");
    }

    if (cargando) return 'Cargando...';
    return (
        <>
            <header className="bg-white shadow-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo/Título */}
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold text-gray-900">Task Manager</h1>
                        </div>
                        {/* Navegación y botón de cerrar sesión */}
                        <div className="flex items-center space-x-4">
                            {/* Información del usuario (opcional) */}
                            <div className="hidden sm:flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">{auth?.nombre && obtenerIniciales(auth.nombre)}</span>
                                </div>
                                <span className="text-gray-700 text-sm">{auth?.nombre && auth.nombre}</span>
                            </div>
                            {/* Botón de cerrar sesión */}
                            <button
                                onClick={cerrarSesion}
                                type="button"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                            >
                                <svg
                                    className="w-4 h-4 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    />
                                </svg>
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                {/* <h1 className="text-3xl font-bold text-center mb-8">Gestor de Tareas</h1> */}


                {/* Contenedor principal */}
                {auth?.id ? (<Outlet />) : <Navigate to="/" />}
            </div>
        </>
    )
}

export default Admin