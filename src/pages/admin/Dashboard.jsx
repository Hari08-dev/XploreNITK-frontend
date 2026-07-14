import {
    Users,
    Building2,
    Heart,
    TrendingUp,
    Plus,
    UserCog,
    MapPinned,
    ArrowRight
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import StatCard from "../../components/admin/StatCard.jsx";
import { useContext } from "react";
import { AdminContext } from "../../services/admin/admin.context.jsx";
import Loading from "../../components/Loading.jsx";

const Dashboard = () => {

    const navigate = useNavigate();

    const {stats, loading, recentEntities, topTrendingPlace} = useContext(AdminContext);

    if(loading){
        return <Loading />
    }

    return (

        <div className="space-y-8">

            {/* Welcome */}

            <section>

                <h1 className="text-4xl font-bold">

                    Welcome back 👋

                </h1>

                <p className="mt-2 text-zinc-400">

                    Manage your campus from one beautiful dashboard.

                </p>

            </section>

            {/* Stats */}

            <section className="grid gap-6 lg:grid-cols-3">

                <StatCard
                    title="Users"
                    value={stats.users}
                    subtitle="+12 this month"
                    icon={Users}
                    color="from-blue-500 to-cyan-500"
                />

                <StatCard
                    title="Entities"
                    value={stats.entities}
                    subtitle="Campus locations"
                    icon={Building2}
                    color="from-purple-500 to-pink-500"
                />

                <StatCard
                    title="Favorites"
                    value={stats.favorites}
                    subtitle="Saved by students"
                    icon={Heart}
                    color="from-red-500 to-orange-500"
                />

            </section>

            {/* Middle */}

            <section className="grid gap-6 xl:grid-cols-3">

                {/* Trending */}

                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

                    <img
                        src={topTrendingPlace.image}
                        alt={topTrendingPlace.name}
                        className="w-full h-48 object-cover"
                    />

                    <div className="p-7">

                        <div className="flex items-center gap-3">

                            <TrendingUp
                                className="text-green-400"
                                size={24}
                            />

                            <h2 className="text-xl font-semibold">
                                Trending Place
                            </h2>

                        </div>

                        <h1 className="mt-6 text-3xl font-bold">
                            {topTrendingPlace.name}
                        </h1>

                        <p className="mt-2 text-zinc-400">
                            {topTrendingPlace.category}
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-zinc-400">

                            <MapPinned size={18} />

                            <span>{topTrendingPlace.location}</span>

                        </div>

                        <div className="mt-8 flex items-center justify-between">

                            <div className="flex items-center gap-2">

                                <Heart
                                    className="text-red-500 fill-red-500"
                                    size={20}
                                />

                                <span className="text-xl font-semibold">
                                    {topTrendingPlace.favoriteCount}
                                </span>

                                <span className="text-zinc-500">
                                    favourites
                                </span>

                            </div>

                            <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    topTrendingPlace.status === "open"
                                        ? "bg-green-500/20 text-green-400"
                                        : topTrendingPlace.status === "closed"
                                        ? "bg-red-500/20 text-red-400"
                                        : "bg-yellow-500/20 text-yellow-400"
                                }`}
                            >
                                {topTrendingPlace.status}
                            </span>

                        </div>

                    </div>

                </div>

                {/* Recent */}

                <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

                    <div className="mb-6 flex items-center justify-between">

                        <h2 className="text-xl font-semibold">

                            Recently Added

                        </h2>

                        <button
                            onClick={() => navigate("/admin/entities")}
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                        >

                            View All

                            <ArrowRight size={18}/>

                        </button>

                    </div>

                    <div className="space-y-4">

                        {recentEntities.map(entity => (

                            <div
                                key={entity._id}
                                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-blue-500/30"
                            >

                                <div>

                                    <h3 className="font-semibold">

                                        {entity.name}

                                    </h3>

                                    <p className="mt-1 text-sm text-zinc-400">

                                        {entity.category}

                                    </p>

                                </div>

                                <span
                                    className={`rounded-full px-4 py-2 text-sm ${
                                        entity.status === "Open"
                                            ? "bg-green-500/20 text-green-400"
                                            : "bg-red-500/20 text-red-400"
                                    }`}
                                >

                                    {entity.status}

                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Quick Actions */}

            <section>

                <h2 className="mb-5 text-2xl font-semibold">

                    Quick Actions

                </h2>

                <div className="grid gap-6 md:grid-cols-3">

                    <button
                        onClick={() => navigate("/admin/entities")}
                        className="rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-left transition hover:scale-[1.03]"
                    >

                        <Plus size={32}/>

                        <h2 className="mt-6 text-xl font-bold">

                            Manage Entities

                        </h2>

                        <p className="mt-2 text-white/80">

                            Add, update and delete campus locations.

                        </p>

                    </button>

                    <button
                        onClick={() => navigate("/admin/users")}
                        className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-xl transition hover:scale-[1.03]"
                    >

                        <UserCog
                            size={32}
                            className="text-blue-400"
                        />

                        <h2 className="mt-6 text-xl font-bold">

                            Manage Users

                        </h2>

                        <p className="mt-2 text-zinc-400">

                            View all registered users.

                        </p>

                    </button>

                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/30 to-blue-600/20 p-6 backdrop-blur-xl">

                        <h2 className="text-xl font-bold">

                            🤖 AI Insights

                        </h2>

                        <p className="mt-6 text-zinc-300">

                            Gemini integration coming soon.

                        </p>

                        <div className="mt-8 rounded-xl bg-white/10 p-4 text-sm text-zinc-400">

                            AI will show trending searches,
                            popular locations,
                            and student behaviour here.

                        </div>

                    </div>

                </div>

            </section>

        </div>

    );

};

export default Dashboard;