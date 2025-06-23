import { useState, createContext } from "react";
import clienteAxios from "../config/axios";
import { useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios('/tareas/', config);
            setTareas(data)

        }
        getTasks()
    }, [])

    const saveTask = async (task) => {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const { data } = await clienteAxios.post('/tareas/new-task', task, config);
            setTareas([data, ...tareas])
            return {
                msg: 'Tarea agregada'
            }
        } catch (error) {
            return {
                msg: 'Hubo un error',
                error: true
            }
        }
    }

    const cambiarEstado = async (task) => {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const { data } = await clienteAxios.put(`/tareas/change-task/${task.id}`, task, config);
            const tareasActualizadas = tareas.map(tareaState => tareaState.id === data.id ? data : tareaState);
            setTareas(tareasActualizadas)
        } catch (error) {
            console.log(error.response.data.msg);
        }
    }

    return (
        <TaskContext.Provider value={{
            saveTask,
            tareas,
            cambiarEstado
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext