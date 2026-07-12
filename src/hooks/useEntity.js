import {useContext} from "react";
import { toggleFav } from "../services/fav/fav.api.js";
import { AuthContext } from "../services/auth/auth.context.jsx";
import { EntityContext } from "../services/entities/entity.context.jsx";
import { askAi } from "../services/search/search.api.js";

export const useEntity = () => {

    const { setUser, setLoading } = useContext(AuthContext);
    const {search, setLoading: setELoading, setEntities} = useContext(EntityContext);

    const handleToggleFav = async(id) => {
        try{
            setLoading(true);
            const res = await toggleFav(id);
            setUser(res.user);
        } catch(err){
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    const handleAskAi = async(query, entities) => {
        try {
            setELoading(true);
            const results = await askAi(query, entities);
            setEntities(results);
        } catch(err){
            throw err;
        } finally {
            setELoading(false);
        }
    }

    return { handleToggleFav, handleAskAi }

}