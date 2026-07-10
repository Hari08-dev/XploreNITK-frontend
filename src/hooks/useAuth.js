import {useContext} from "react";
import { AuthContext } from "../services/auth/auth.context";
import { EntityContext } from "../services/entities/entity.context";
import { logout, getCurrentUser, updateUser, Auth} from "../services/auth/auth.api";

export const useAuth = () => {
    const {user, setUser, loading, setLoading} = useContext(AuthContext);
    const {setSearch, setEntities} = useContext(EntityContext);

    const handleLogout = async () => {
        setLoading(true);
        try {
            await logout();
            setUser(null);
            setEntities([]);
            setSearch("");
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

    const handleAuth = async(credential) => {
        try{
            setLoading(true);
            const response = await Auth(credential);
            setUser(response.user);
        } catch(error){
            console.log(error);
            throw error;
        } finally{
            setLoading(false);
        }
    }

    return { handleLogout, handleGetCurrentUser, handleUpdateUser, handleAuth };

}
