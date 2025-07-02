import { useEffect, useState } from "react"
import Alerta from "../../components/Alerta"
import clienteAxios from "../../config/axios"
import { useNavigate, useParams } from "react-router-dom"

const CambiarPassword = () => {

    // Token
    const { token } = useParams();
    // Cargar formulario
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    // Alerta
    const [alerta, setAlerta] = useState({})
    // Inputs
    const [password, setPassword] = useState('')
    const [passwordConfirmado, setPasswordConfirmado] = useState('');
    // Redireccionar
    const navigate = useNavigate();

    useEffect(() => {
        const validarToken = async () => {
            try {
                const { data } = await clienteAxios(`/usuarios/cambiar-password/${token}`);
                setCuentaConfirmada(true);
            } catch (error) {
                setAlerta({
                    msg: 'Token inválido',
                    error: true
                })
            }
        }
        validarToken();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if ([password, passwordConfirmado].includes("")) {
            setAlerta({
                msg: 'Completa los campos',
                error: true
            })
            return;
        }

        if (password !== passwordConfirmado) {
            setAlerta({
                msg: 'Los passwords no coinciden',
                error: true
            })
            return;
        }

        try {
            const { data } = await clienteAxios.post(`/usuarios/cambiar-password/${token}`, {password});
            console.log(data);
            setAlerta({
                msg: 'Password modificado'
            })
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    }

    const { msg } = alerta
    return (
        <>
            {/* Header */}
            <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-3a1 1 0 011-1h2.586l6.414-6.414a6 6 0 017.743-5.743L15 7z"
                        />
                    </svg>
                </div>
                <h1 className="text-2xl font-semibold text-gray-900">
                    Cambiar Password
                </h1>
            </div>
            {msg && <Alerta alerta={alerta} />}
            {/* Reset Form */}
            {cuentaConfirmada && (
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Password Field */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                            placeholder="*****"
                        />
                    </div>
                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Confirma tu Password
                        </label>
                        <input
                            value={passwordConfirmado}
                            onChange={e => setPasswordConfirmado(e.target.value)}
                            type="password"
                            id="passwordConfirmado"
                            name="passwordConfirmado"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                            placeholder="*****"
                        />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gray-900 text-white py-2.5 px-4 rounded-md text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                        id="submitBtn"
                    >
                        Cambiar Password
                    </button>
                </form>
            )}
        </>
    )
}

export default CambiarPassword