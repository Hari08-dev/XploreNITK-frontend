import {createContext, useState, useEffect, useContext} from 'react'
import { getAllEntities } from './entities.api.js';
import { AuthContext } from '../auth/auth.context.jsx';

export const EntityContext = createContext();

export const EntityProvider = ({children}) => {
    const {user} = useContext(AuthContext);
    const [entities, setEntities] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [displayedEntities, setDisplayedEntities] = useState([]);
    const [aiSearch, setAiSearch] = useState(false);

    useEffect(()=>{
        const showEntities = async() => {
            try{
                setLoading(true);
                const response = await getAllEntities();
                setEntities(response);
                setDisplayedEntities(response);
            } catch(err){
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        showEntities();
    }, []);

    return(
        <EntityContext.Provider value={{entities, setEntities, search, setSearch, loading, setLoading, aiSearch, setAiSearch, displayedEntities, setDisplayedEntities}}>
            {children}
        </EntityContext.Provider>
    )
}