import { useState, createContext } from "react";
import clienteAxios from "../config/axios";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const saveTask = async (task) => {
        try {
            const { data } = await clienteAxios.post('/new-task');
            console.log(data);

        } catch (error) {
            console.log(error);
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