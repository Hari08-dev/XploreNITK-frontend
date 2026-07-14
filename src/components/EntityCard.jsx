import React, { useContext } from "react";
import { Heart } from "lucide-react";
import { AuthContext } from "../services/auth/auth.context";
import { useEntity } from "../hooks/useEntity.js"
import { EntityContext } from "../services/entities/entity.context.jsx";



const EntityCard = ({ entity }) => {
    const { user } = useContext(AuthContext);
    const { aiSearch } = useContext(EntityContext);
    const { handleToggleFav } = useEntity();

    const openMaps = () => {
        window.open(
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(entity.location)}`,
            "_blank"
        );
    };

    const isFavorite = user?.favorites?.includes(entity._id) ?? false;

    return (
        <div className="relative bg-white rounded-xl shadow-md overflow-hidden">

            {/* Image */}
            <img
                src={entity.image}
                alt={entity.name}
                className="w-full h-52 object-cover"
            />

            {/* Favorite Button */}
            <button
                onClick={() => handleToggleFav(entity._id)}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition duration-200"
            >
                {isFavorite ? (
                    <Heart
                        fill="red"
                        className="w-6 h-6 text-red-500"
                    />
                ) : (
                    <Heart
                        className="w-6 h-6 text-gray-600"
                    />
                )}
            </button>

            {/* Card Content */}
            <div className="p-4">

                <div className="flex justify-between items-center">

                    <h2 className="text-xl font-bold">
                        {entity.name}
                    </h2>

                    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full capitalize">
                        {entity.status}
                    </span>

                </div>

                <p className="text-blue-600 text-sm mt-1">
                    {entity.category}
                </p>

                <p className="text-gray-600 mt-3">
                    {entity.description}
                </p>

                <p className="mt-3 font-medium">
                    📍 {entity.location}
                </p>

                <button
                    onClick={openMaps}
                    className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
                >
                    Navigate
                </button>

                {aiSearch && entity.reason && (
                    <div className="mt-4 pt-3 border-t border-gray-200">
                        <div className="flex items-start gap-2">
                            <span className="text-lg">✨</span>

                            <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                    AI Reason
                                </p>

                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {entity.reason}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </div>
    );
};

export default EntityCard;