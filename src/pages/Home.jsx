import Formulario from "../components/Formulario"
import Task from "../components/Task";
import useTask from "../hooks/useTask"

const Home = () => {
    const { tareas } = useTask();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Columna del formulario */}
            <div className="lg:col-span-1">
                <div className="sticky top-4 p-6 bg-white rounded-lg shadow-md border border-gray-200 h-fit">

                    <h2 className="text-xl font-bold mb-4">Agregar Nueva Tarea</h2>

                    <Formulario />
                </div>
            </div>

            {/* Filtrado y listado de tareas */}
            <div className="lg:col-span-2">

                {/* Filtrado */}
                <div className="mb-6">
                    <label htmlFor="filtro" className="block text-sm font-medium mb-2">
                        Filtrar por estado:
                    </label>
                    <select
                        id="filtro"
                        className="w-full md:w-64 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Todas las tareas</option>
                        <option value="0">Pendientes</option>
                        <option value="1">Completadas</option>
                    </select>
                </div>

                {/* Grid de tareas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Listado de tareas */}
                    {tareas.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Home