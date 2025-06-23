import useTask from "../hooks/useTask"

const Task = ({ task }) => {
    const { id, titulo, descripcion, estado } = task
    const { cambiarEstado } = useTask();

    return (
        <div className={`rounded-lg shadow-md overflow-hidden border ${estado ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'}`}>
            <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-semibold bg-gray-200 rounded-full px-2 py-1">ID: {id}</span>
                    {estado ? (
                        <span className="text-xs font-semibold rounded-full px-2 py-1 bg-green-200 text-green-800">
                            Completado
                        </span>
                    ) : (
                        <span className="text-xs font-semibold rounded-full px-2 py-1 bg-yellow-200 text-yellow-800">
                            Pendiente
                        </span>
                    )}
                </div>

                <h2 className="text-xl font-bold mb-2">{titulo}</h2>
                <p className="text-gray-600 mb-4">{descripcion}</p>

                <button
                    onClick={() => cambiarEstado(task)}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${estado ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-green-500 hover:bg-green-600'} text-white`}>
                    {estado ? 'Marcar como pendiente' : 'Marcar como completado'}
                </button>
            </div>
        </div >
    )
}

export default Task