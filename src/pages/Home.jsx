import {React, useContext} from 'react'
import {useNavigate, Navigate} from 'react-router-dom'
import {AuthContext} from '../services/auth/auth.context.jsx'
import Loading from "../components/Loading.jsx"
import { EntityContext } from '../services/entities/entity.context.jsx'
import EntityCard from '../components/Entitycard.jsx'
import Header from '../components/Header.jsx'

const Home = () => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  const { entities, search } = useContext(EntityContext);

  if(loading){
    return ( <Loading /> );
  }
  
  if(!user){
    return <Navigate to='/login' replace />
  }

  const filteredEntities = entities.filter((entity) => {
    const query = search.toLowerCase();

    return (
        entity.name?.toLowerCase().includes(query) ||
        entity.category?.toLowerCase().includes(query) ||
        entity.location?.toLowerCase().includes(query) ||
        entity.description?.toLowerCase().includes(query)
    );
  });
  
  return (
    <> 
      <Header />

      <div className="p-4 space-y-5">

        {search && filteredEntities.map((entity) => (
            <EntityCard key={entity._id} entity={entity} />
        ))}

        {!search && entities.map((entity) => (
            <EntityCard
                key={entity._id}
                entity={entity}
            />
        ))}
      </div>
    </>
  );
}

export default Home