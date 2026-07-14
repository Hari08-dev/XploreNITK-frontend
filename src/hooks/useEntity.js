import {useContext} from "react";
import { toggleFav } from "../services/fav/fav.api.js";
import { AuthContext } from "../services/auth/auth.context.jsx";
import { EntityContext } from "../services/entities/entity.context.jsx";
import { askAi } from "../services/search/search.api.js";

export const useEntity = () => {

    const { setUser } = useContext(AuthContext);
    const { setLoading, setDisplayedEntities, setAiSearch, entities} = useContext(EntityContext);

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

    const handleSearch = (search) => {
        const filteredEntities = entities.filter((entity) => {
            if (!search.trim().length) {
                setDisplayedEntities(entities);
                setAiSearch(false);
                return;
            }
            const query = search.toLowerCase();

            return (
                    entity.name?.toLowerCase().includes(query) ||
                    entity.category?.toLowerCase().includes(query) ||
                    entity.location?.toLowerCase().includes(query) ||
                    entity.description?.toLowerCase().includes(query)
                );
        });
        filteredEntities.length ? setDisplayedEntities(filteredEntities) : setDisplayedEntities(entities);
        setAiSearch(false);
    }

    const handleAskAi = async(query, entities) => {
        try {
            setLoading(true);
            const results = await askAi(query, entities);
            setDisplayedEntities(results);
            setAiSearch(true);
        } catch(err){
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return { handleToggleFav, handleAskAi, handleSearch }

}