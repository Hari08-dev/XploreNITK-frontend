import {createContext, useState, useEffect, useContext} from 'react'
import { getAllEntities } from './entities.api.js';
import { AuthContext } from '../auth/auth.context.jsx';
import { getStatus } from '../../utils/getStatus.js';

export const EntityContext = createContext();

export const EntityProvider = ({children}) => {
    const {user, loading: aLoading} = useContext(AuthContext);
    const [entities, setEntities] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [displayedEntities, setDisplayedEntities] = useState([]);
    const [aiSearch, setAiSearch] = useState(false);

    useEffect(()=>{
        const showEntities = async() => {
            if(aLoading) return;
            try{
                setLoading(true);
                const response = await getAllEntities();
                const updatedEntities = response.map(entity => ({
                    ...entity,
                    status: getStatus(entity.timings),
                }));
                setEntities(updatedEntities);
                setDisplayedEntities(updatedEntities);
            } catch(err){
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        showEntities();
    }, [user]);

    return(
        <EntityContext.Provider value={{entities, setEntities, search, setSearch, loading, setLoading, aiSearch, setAiSearch, displayedEntities, setDisplayedEntities}}>
            {children}
        </EntityContext.Provider>
    )
}