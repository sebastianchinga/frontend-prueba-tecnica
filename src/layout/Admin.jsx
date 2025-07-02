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
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo/Title */}
                        <div className="flex items-center">
                            <h1 className="text-xl font-semibold text-gray-900">
                                Panel de Proyectos
                            </h1>
                        </div>
                        {/* User Info & Logout */}
                        <div className="flex items-center space-x-4">
                            {/* User Avatar & Name */}
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-medium text-white">{auth?.nombre && obtenerIniciales(auth.nombre)}</span>
                                </div>
                                <div className="hidden sm:block">
                                    <p className="text-sm font-medium text-gray-900">{auth?.nombre && auth.nombre}</p>
                                </div>
                            </div>
                            {/* Logout Button */}
                            <button onClick={cerrarSesion} className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors">
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
                                    ></path>
                                </svg>
                                <span className="hidden sm:inline">Cerrar Sesión</span>
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