import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import clienteAxios from "../config/axios";

const ConfirmarCuenta = () => {

    const { token } = useParams();
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [mensaje, setMensaje] = useState({})

    useEffect(() => {
        const confirmarUsuario = async () => {
            try {
                const { data } = await clienteAxios(`/usuarios/confirmar/${token}`);
                setMensaje({ msg: data.msg })
                setCuentaConfirmada(true);
                console.log(data);
            } catch (error) {
                setMensaje({ msg: 'Hubo un error en el enlace' })
            }
            setCargando(false);
        }
        confirmarUsuario()
    }, [])

    const { msg } = mensaje

    return (
        <>
            {!cargando && (
                <>
                    {/* Success Icon */}
                    {cuentaConfirmada ? (
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg
                                className="w-8 h-8 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    ) : (
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg
                                className="w-8 h-8 text-red-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>

                    )}

                    {/* Header */}
                    <div className="mb-8 text-center">
                        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
                            {msg}
                        </h1>
                        {cuentaConfirmada ? (
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Tu cuenta ha sido verificada exitosamente. Ya puedes acceder a todas las
                                funcionalidades de la plataforma.
                            </p>
                        ) : (
                            <p className="text-gray-600 text-sm leading-relaxed">
                                No pudimos verificar tu cuenta. El enlace puede haber expirado o ser inválido. Intenta nuevamente o
                                solicita un nuevo enlace de verificación.
                            </p>
                        )}
                    </div>

                    {cuentaConfirmada && (
                        <>
                            {/* Login Button */}
                            <Link to="/" className="w-full bg-gray-900 text-white text-center py-2.5 px-4 rounded-md text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors inline-block mb-4">
                                Iniciar Sesión
                            </Link>
                        </>
                    )}
                </>
            )}
        </>

    )
}

export default ConfirmarCuenta