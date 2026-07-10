import {createContext, useState, useEffect, useContext} from 'react'
import { getAllEntities } from './entities.api.js';
import { AuthContext } from '../auth/auth.context.jsx';

export const EntityContext = createContext();

export const EntityProvider = ({children}) => {
    const {user, loading: authLoading} = useContext(AuthContext);
    const [entities, setEntities] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const showEntities = async() => {
            try{
                setLoading(true);
                const response = await getAllEntities();
                console.log(entities);
                setEntities(response);
            } catch(err){
                console.log(err);
            } finally {
                setLoading(false);
                console.log(entities);
            }
        }
        showEntities();
    }, [user, authLoading]);

    return(
        <EntityContext.Provider value={{entities, setEntities, search, setSearch, loading, setLoading}}>
            {children}
        </EntityContext.Provider>
    )
}