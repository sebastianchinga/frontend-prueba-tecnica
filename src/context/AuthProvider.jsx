import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    return (
        <AuthContext.Provider
            value={{
                
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;