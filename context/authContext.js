import { createContext, useEffect, useState, useContext } from "react";

//https://react.dev/learn/passing-data-deeply-with-context
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        //authStateChanged
        setTimeout(() => {
            setIsAuthenticated(false);
        }, 3000);
    }, [])

    const login = async (email, password) => {
        try {

        } catch (e) {

        }
    }
    const logout = async () => {
        try {

        } catch (e) {

        }
    }

    const register = async (email, password, username, profileUrl) => {
        try {

        } catch (e) {

        }
    }

    return (
        //https://react.dev/reference/react/createContext#provider
        <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const value = useContext(AuthContext);

    if (!value) {
        throw new Error('useAuth must be wrapped inside AuthContextProvider');
    }
    return value;
}