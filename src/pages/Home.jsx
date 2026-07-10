import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../services/auth/auth.context.jsx";
import { EntityContext } from "../services/entities/entity.context.jsx";
import Header from "../components/Header.jsx";
import EntityCard from "../components/EntityCard.jsx";
import Loading from "../components/Loading.jsx";

const Home = () => {
    const { user, loading: authLoading} = useContext(AuthContext);
    const { entities, search, loading } = useContext(EntityContext);

    if(loading || authLoading){
      return ( <Loading /> );
    }

    if (!user) {
        return <Navigate to='/auth' replace />
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
        <div className="min-h-screen bg-gray-100 flex flex-col">
          
            <Header />

            <main className="flex-1 overflow-y-auto px-4 py-4">

                <div className="max-w-2xl mx-auto space-y-4">

                    {(search ? filteredEntities : entities).map((entity) => (
                        <EntityCard
                            key={entity._id}
                            entity={entity}
                        />
                    ))}

                </div>

            </main>

        </div>
    );
};

export default Home;