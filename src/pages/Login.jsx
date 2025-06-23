import { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";
const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes(" ")) {
      setAlerta({
        msg: 'Completa los campos',
        error: true
      })
      return;
    }

    try {
      const { data } = await clienteAxios.post('/usuarios', { email, password });
      localStorage.setItem('token', data.token);
      setAuth(data);
      navigate('/admin')
      
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg } = alerta
  return (
    <>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Iniciar Sesión
        </h1>
        <p className="text-sm text-gray-600">Ingresa a tu cuenta</p>
      </div>
      {msg && <Alerta alerta={alerta} />}
      {/* Login Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
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
            placeholder="Tu contraseña"
          />
        </div>
        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
            />
            <span className="ml-2 text-gray-600">Recordarme</span>
          </label>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2.5 px-4 rounded-md text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          Iniciar Sesión
        </button>
      </form>
      {/* Sign Up Link */}
      <div className="text-center mt-6 pt-6 border-t border-gray-200">

        <p className="text-sm text-gray-600">
          ¿No tienes cuenta?{" "}
          <Link to="registro" className="text-gray-900 hover:text-gray-700 font-medium transition-colors">
            Crear cuenta
          </Link>

        </p>
      </div>
    </>

  )
}

export default Login