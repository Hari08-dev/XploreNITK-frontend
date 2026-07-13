import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { EntityContext } from "../services/entities/entity.context.jsx";
import { AuthContext } from "../services/auth/auth.context.jsx";
import EntityCard from "../components/EntityCard.jsx";
import Loading from "../components/Loading.jsx";
import { Heart, ArrowLeft } from "lucide-react";

const Favorites = () => {
    const navigate = useNavigate();

    const { user, loading } = useContext(AuthContext);
    const { entities, loading: entityLoading } = useContext(EntityContext);

    if (loading || entityLoading) {
        return <Loading />;
    }

    if(!user){
        return <Navigate to='/auth' replace />
    }

    const favoriteEntities = entities.filter((entity) =>
        user.favorites.includes(entity._id)
    );

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header */}
            <div className="sticky top-0 bg-white shadow-sm px-5 py-4 z-10">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <button
                            onClick={() => navigate("/profile")}
                            className="p-2 rounded-full hover:bg-gray-100 transition"
                        >
                            <ArrowLeft size={22} />
                        </button>

                        <h1 className="text-2xl font-bold">
                            Favorites
                        </h1>

                    </div>

                    <div className="flex items-center gap-2">

                        <Heart
                            size={22}
                            fill="red"
                            className="text-red-500"
                        />

                        <span className="font-semibold text-lg">
                            {favoriteEntities.length}
                        </span>

                    </div>

                </div>

            </div>

            {/* Body */}
            {favoriteEntities.length === 0 ? (

                <div className="flex flex-col items-center justify-center h-[70vh]">

                    <Heart
                        size={80}
                        className="text-gray-300"
                    />

                    <h2 className="text-2xl font-bold mt-5">
                        No Favorites Yet
                    </h2>

                    <p className="text-gray-500 mt-2 text-center">
                        Tap the ❤️ icon on any place to
                        <br />
                        add it to your favorites.
                    </p>

                </div>

            ) : (

                <div className="max-w-md mx-auto p-5 space-y-5">

                    {favoriteEntities.map((entity) => (
                        <EntityCard
                            key={entity._id}
                            entity={entity}
                        />
                    ))}

                </div>

            )}

        </div>
    );
};

export default Favorites;