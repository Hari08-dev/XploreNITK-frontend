import { Search, Bell, CalendarDays } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../services/auth/auth.context.jsx";

const Navbar = () => {

    const { user } = useContext(AuthContext);

    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <header className="sticky top-0 z-20 border-b border-white/10 bg-[#09090B]/70 backdrop-blur-xl">

            <div className="flex items-center justify-between px-8 py-5">

                {/* Left */}

                <div>

                    <h1 className="text-3xl font-bold tracking-tight">
                        Dashboard
                    </h1>

                    <div className="mt-2 flex items-center gap-2 text-sm text-zinc-400">

                        <CalendarDays size={16} />

                        {today}

                    </div>

                </div>

                {/* Right */}

                <div className="flex items-center gap-5">

                    {/* Search */}

                    <div className="relative hidden lg:block">

                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                        />

                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-80 rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />

                    </div>

                    {/* Notification */}

                    <button className="relative rounded-2xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:bg-white/10">

                        <Bell size={20} />

                        <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500" />

                    </button>

                    {/* Profile */}

                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-lg font-bold">

                            {user?.name?.charAt(0).toUpperCase()}

                        </div>

                        <div className="hidden md:block">

                            <p className="font-semibold">
                                {user?.name}
                            </p>

                            <p className="text-xs text-zinc-400">
                                Administrator
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </header>
    );
};

export default Navbar;