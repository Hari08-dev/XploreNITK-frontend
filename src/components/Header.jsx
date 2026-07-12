import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { AuthContext } from "../services/auth/auth.context.jsx";
import { EntityContext } from "../services/entities/entity.context.jsx";
import { useEntity } from '../hooks/useEntity.js'
import Loading from "./Loading.jsx";

const Header = () => {
    const navigate = useNavigate();
    const { handleAskAi } = useEntity();
    const { user, loading: aLoading } = useContext(AuthContext);
    const { entities, search, setSearch } = useContext(EntityContext);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await handleAskAi(search, entities);
        } catch(err){
            console.log(err);
        }
    }

    if(aLoading){
        return <Loading />
    }

    return (
        <div className="sticky top-0 bg-white shadow-md z-10">

            <div className="flex items-center justify-between px-5 pt-5">

                <div>
                    <h1 className="text-2xl font-bold">
                        Hi, {user.name} 👋
                    </h1>

                    <p className="text-gray-500">
                        Find places around your campus
                    </p>
                </div>

                <img
                    onClick={() => navigate("/profile")}
                    src={user.avatar}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover cursor-pointer"
                />

            </div>

            <div className="px-5 py-4">

                <div className="flex gap-3">

                    <input
                        type="text"
                        placeholder="Search by name, category or location..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        onClick={handleSubmit}
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-xl transition"
                    >
                        <Sparkles size={18} />
                        <span className="hidden sm:inline font-medium">
                            Ask AI
                        </span>
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Header;