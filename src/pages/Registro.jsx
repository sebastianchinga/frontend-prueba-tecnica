import React from 'react'

const Registro = () => {
    return (
        <>
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">Crear Cuenta</h1>
                <p className="text-sm text-gray-600">Completa tus datos para registrarte</p>
            </div>
            {/* Register Form */}
            <form className="space-y-5" action="#" method="POST">
                {/* Full Name Field */}
                <div>
                    <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Nombre completo
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required=""
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                        placeholder="Tu nombre completo"
                    />
                </div>
                {/* Email Field */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required=""
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                        placeholder="correo@ejemplo.com"
                    />
                </div>
                {/* Password Field */}
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required=""
                        minLength={8}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                        placeholder="Mínimo 8 caracteres"
                    />
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-2.5 px-4 rounded-md text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors mt-6"
                >
                    Crear Cuenta
                </button>
            </form>
            {/* Login Link */}
            <div className="text-center mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                    ¿Ya tienes cuenta?
                    <a
                        href="#"
                        className="text-gray-900 hover:text-gray-700 font-medium transition-colors"
                    >
                        Iniciar sesión
                    </a>
                </p>
            </div>
        </>

    )
}

export default Registro