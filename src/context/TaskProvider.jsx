import { useState, createContext } from "react";
import clienteAxios from "../config/axios";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

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

    return (
        <TaskContext.Provider value={{
            saveTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext