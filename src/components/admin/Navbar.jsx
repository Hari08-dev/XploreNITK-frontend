import { Search, Bell, CalendarDays } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../services/auth/auth.context.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();
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

                    {/* Profile */}

                    <div onClick={()=>{navigate('/profile')}} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5">
                            <img
                                src={user?.avatar}
                                alt={user?.name}
                                className="h-full w-full rounded-full object-cover"
                            />
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