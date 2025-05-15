import { useEffect, useState } from "react"
import Task from "./components/Task";
import clienteAxios from "./config/axios";

function App() {

  const [tasks, setTasks] = useState([]);
  const [estado, setEstado] = useState();
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  

  useEffect(() => {
    const consultarDB = async () => {
      if (!estado) {
        const { data } = await clienteAxios.get('/');
        setTasks(data);
        return
      }

      const { data } = await clienteAxios.get(`filter-task/${estado}`);
      setTasks(data);
    }

    consultarDB()
  }, [estado])

  const actualizarTarea = (tareaActualizada) => {
    setTasks(prev => prev.map(task => task.id === tareaActualizada.id ? tareaActualizada : task));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await clienteAxios.post('new-task', {
        titulo,
        descripcion
      });

      setTasks(prev => [...prev, data]);
      setTitulo('');
      setDescripcion('');
    } catch (error) {
      console.error('Error al agregar tarea:', error.message);
    }
  };


  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Gestor de Tareas</h1>

        {/* Contenedor principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Columna del formulario */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 p-6 bg-white rounded-lg shadow-md border border-gray-200 h-fit">

              <h2 className="text-xl font-bold mb-4">Agregar Nueva Tarea</h2>

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
                value={estado}
                onChange={e => setEstado(e.target.value)}
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
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  onUpdate={actualizarTarea}
                />
              ))}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
