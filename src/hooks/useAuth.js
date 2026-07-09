import {useContext} from "react";
import { AuthContext } from "../services/auth/auth.context";
import {login, register, logout, getCurrentUser, updateUser} from "../services/auth/auth.api";

export const useAuth = () => {
    const {user, setUser, loading, setLoading} = useContext(AuthContext);

    const handleLogin = async (userData) => {
        setLoading(true);
        try {
            const response = await login(userData);
            setUser(response.user);
            return response;
        } catch (error) {
            console.error("Login error:", error);
            throw error; // Rethrow the error to be handled in the calling function
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (userData) => {
        setLoading(true);
        try {
            const response = await register(userData);
            setUser(response.user);
            return response;
        } catch (error) {
            console.error("Register error:", error);
            throw error; // Rethrow the error to be handled in the calling function
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        setLoading(true);
        try {
            await logout();
            setUser(null);
        } catch (error) {
            console.error("Logout error:", error);
            throw error; // Rethrow the error to be handled in the calling function
        } finally {
            setLoading(false);
        }
    };

    const handleGetCurrentUser = async () => {
        setLoading(true);
        try {
            const response = await getCurrentUser();
            setUser(response.user);
            return response;
        } catch (error) {
            console.error("Get current user error:", error);
            throw error; // Rethrow the error to be handled in the calling function
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateUser = async (id, userData) => {
        setLoading(true);
        try {
            const response = await updateUser(id, userData);
            setUser(response.user);
            return response;
        } catch (error) {
            console.error("Update user error:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return { handleLogin, handleRegister, handleLogout, handleGetCurrentUser, handleUpdateUser };

}
