import { useContext } from "react";
import { AuthContext } from "../services/auth/auth.context.jsx";
import { EntityContext } from "../services/entities/entity.context.jsx";
import Header from "../components/Header.jsx";
import EntityCard from "../components/EntityCard.jsx";
import Loading from "../components/Loading.jsx";

const Home = () => {
    const { user } = useContext(AuthContext);
    const { loading, displayedEntities } = useContext(EntityContext);

    if(loading){
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
          
            <Header />

            <main className="flex-1 overflow-y-auto px-4 py-4">

                <div className="max-w-2xl mx-auto space-y-4">
                    
                    {displayedEntities.map((entity) => (
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