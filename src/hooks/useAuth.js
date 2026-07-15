import {useContext} from "react";
import { AuthContext } from "../services/auth/auth.context.jsx";
import { EntityContext } from "../services/entities/entity.context.jsx";
import { logout, updateMe, Auth} from "../services/auth/auth.api.js";

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
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateUser = async (id, userData) => {
        setLoading(true);
        try {
            const response = await updateMe(id, userData);
            setUser(response.user);
        } catch (error) {
            console.error("Update user error:", error);
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
        } finally{
            setLoading(false);
        }
    }

    return { handleLogout, handleUpdateUser, handleAuth };

}
