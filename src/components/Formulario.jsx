import { useState } from "react";
import useTask from "../hooks/useTask";
import Alerta from "./Alerta";

const Formulario = () => {

    const [alerta, setAlerta] = useState({})

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [estado, setEstado] = useState(false);

    const { saveTask } = useTask();

    async function handleSubmit(e) {
        e.preventDefault();

        if (titulo === '' || descripcion === '') {
            setAlerta({
                msg: 'Completa los campos',
                error: true
            })
            return;
        }

        const resultado = await saveTask({ titulo, descripcion, estado })
        setAlerta(resultado)
        setTitulo('')
        setDescripcion('')
        setTimeout(() => {
            setAlerta({})
        }, 3000);
    }

    const { msg } = alerta

    return (
        <>
            {msg && <Alerta alerta={alerta} />}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">Título:</label>
                    <input
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        type="text"
                        id="titulo"
                        name="titulo"
                        placeholder="Ingresa el título de la tarea"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">Descripción:</label>
                    <textarea
                        value={descripcion}
                        onChange={e => setDescripcion(e.target.value)}
                        id="descripcion"
                        name="descripcion"
                        rows="3"
                        placeholder="Ingresa la descripción de la tarea"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>

                <button type="submit"
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                    Agregar Tarea
                </button>
            </form>
        </>
    )
}

export default Formulario