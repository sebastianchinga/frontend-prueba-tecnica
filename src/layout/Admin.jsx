import React from 'react'
import { Outlet } from 'react-router-dom'

const Admin = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Gestor de Tareas</h1>

            {/* Contenedor principal */}
            <Outlet />
        </div>
    )
}

export default Admin