import {createContext, useState, useEffect, useContext} from 'react'
import { getAllEntities } from './entities.api.js';
import { AuthContext } from '../auth/auth.context.jsx';

export const EntityContext = createContext();

export const EntityProvider = ({children}) => {
    const [entities, setEntities] = useState([]);
    const [search, setSearch] = useState("");
    const {loading, setLoading} = useContext(AuthContext);

    useEffect(()=>{
        const showEntities = async() => {
            try{
                setLoading(true);
                const response = await getAllEntities();
                setEntities(response);
            } catch(err){
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        showEntities();
    }, [setLoading]);

    console.log(entities);

    return(
        <EntityContext.Provider value={{entities, setEntities, search, setSearch}}>
            {children}
        </EntityContext.Provider>
    )
}