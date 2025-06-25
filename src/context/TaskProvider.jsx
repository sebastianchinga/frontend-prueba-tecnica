import { useState, createContext } from "react";
import clienteAxios from "../config/axios";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const { auth } = useAuth();
    const [tareas, setTareas] = useState([]);
    const [estado, setEstado] = useState();

    useEffect(() => {
        const getTasks = async () => {

            // Obtener token
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await clienteAxios('/tareas/', config);
                // Seteamos el array tareas
                setTareas(data)
            } catch (error) {
                setTareas([])
            }
        }
        getTasks()
    }, [auth])

    useEffect(() => {
        const filterTasks = async () => {
            // Obtener token
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            if (estado) {
                try {
                    const {data} = await clienteAxios(`/tareas/filter-task/${Number(estado)}`, config)
                    setTareas(data)
                } catch (error) {
                    console.log(error.response.data);
                }
                return;
            }

            try {
                const { data } = await clienteAxios('/tareas/', config);
                // Seteamos el array tareas
                setTareas(data)
            } catch (error) {
                setTareas([])
            }

        }
        filterTasks()
    }, [estado])

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
            cambiarEstado,
            setEstado
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext