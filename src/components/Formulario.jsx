import { useState } from "react";
import useTask from "../hooks/useTask";

const Formulario = () => {

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [estado, setEstado] = useState(false);

    const { saveTask } = useTask();

    async function handleSubmit(e) {
        e.preventDefault();

        if ([titulo, descripcion].includes("")) {
            return;
        }

        saveTask({ titulo, descripcion, estado })

    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4">
                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">Título:</label>
                <input
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    type="text"
                    id="titulo"
                    name="titulo"
                    placeholder="Ingresa el título de la tarea"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required />
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
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required></textarea>
            </div>

            <button type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                Agregar Tarea
            </button>
        </form>
    )
}

export default Formulario