import {createContext, useState, useEffect} from 'react'
import {getCurrentUser} from './auth.api.js'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            try {
                setLoading(true);
                const response = await getCurrentUser();
                console.log(response);
                setUser(response.user);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}