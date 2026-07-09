import React from "react";

const EntityCard = ({ entity }) => {

    const getStatusColor = (status) => {
        switch (status) {
            case "open":
                return "bg-green-500";
            case "closed":
                return "bg-red-500";
            default:
                return "bg-green-500";
        }
    };

    const openMaps = () => {
        window.open(
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(entity.location)}`,
            "_blank"
        );
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">

            <img
                src={entity.image}
                alt={entity.name}
                className="w-full h-52 object-cover"
            />

            <div className="p-4">

                <div className="flex justify-between items-center">

                    <h2 className="text-xl font-bold">
                        {entity.name}
                    </h2>

                    <span
                        className={`${getStatusColor(entity.status)} text-white text-xs px-3 py-1 rounded-full capitalize`}
                    >
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
                    className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                >
                    Navigate
                </button>

            </div>

        </div>
    );
};

export default EntityCard;