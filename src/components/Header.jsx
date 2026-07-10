import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../services/auth/auth.context.jsx";
import { EntityContext } from '../services/entities/entity.context.jsx';


const Header = () => {

    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const {search, setSearch} = useContext(EntityContext);

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

            <button
                onClick={() => navigate("/profile")}
                className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg"
            >
                {user.name.charAt(0).toUpperCase()}
            </button>

        </div>

        <div className="px-5 py-4">

            <input
                type="text"
                placeholder="Search by name, category or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

        </div>

    </div>
  )
}

export default Header