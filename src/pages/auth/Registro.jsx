import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../../components/Alerta';
import clienteAxios from '../../config/axios';

const Registro = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const [alerta, setAlerta] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([nombre, email, password].includes("")) {
            setAlerta({
                msg: 'Completa los campos',
                error: true
            })
            return
        }
        const {data} = await clienteAxios.post('/usuarios/registrar', {nombre, email, password});
        setAlerta({
            msg: data.msg
        })
        setNombre('')
        setEmail('')
        setPassword('')
    }

    const { msg } = alerta

    return (
        <>
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">Crear Cuenta</h1>
                <p className="text-sm text-gray-600">Completa tus datos para registrarte</p>
            </div>
            {msg && <Alerta alerta={alerta} />}
            {/* Register Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Full Name Field */}
                <div>
                    <label
                        htmlFor="nombre"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Nombre completo
                    </label>
                    <input
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        type="text"
                        id="nombre"
                        name="nombre"
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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        name="email"
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
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        name="password"
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
                    ¿Ya tienes cuenta?{" "}
                    <Link className="text-gray-900 hover:text-gray-700 font-medium transition-colors" to="/">
                        Iniciar sesión
                    </Link>
                </p>
            </div>
        </>

    )
}

export default Registro