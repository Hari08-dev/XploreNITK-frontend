import { createContext, useContext, useEffect, useState } from "react";
import { getDashboard } from "./admin.api.js";
import { AuthContext } from "../auth/auth.context.jsx";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const { user } = useContext(AuthContext);

    const [stats, setStats] = useState({
        users: 0,
        entities: 0,
        favorites: 0,
    });

    const [recentEntities, setRecentEntities] = useState([]);
    const [topTrendingPlace, setTopTrendingPlace] = useState({});

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;

        const fetchDashboard = async () => {
            try {
                setLoading(true);

                const res = await getDashboard();

                setStats(res.stats);
                setRecentEntities(res.recentEntities);
                setTopTrendingPlace(res.topTrendingPlace);

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboard();
    }, [user]);

    return (
        <AdminContext.Provider
            value={{
                stats,
                setStats,

                recentEntities,
                setRecentEntities,

                topTrendingPlace,
                setTopTrendingPlace,

                loading,
                setLoading
            }}
        >
            {children}
        </AdminContext.Provider>
    );
};