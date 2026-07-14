import {
    LayoutDashboard,
    Building2,
    Users,
    LogOut,
    Sparkles,
    ChevronRight,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.js";

const Sidebar = () => {

    const navigate = useNavigate();
    const { handleLogout } = useAuth();

    const links = [
        {
            title: "Dashboard",
            icon: LayoutDashboard,
            path: "/admin"
        },
        {
            title: "Entities",
            icon: Building2,
            path: "/admin/entities"
        },
        {
            title: "Users",
            icon: Users,
            path: "/admin/users"
        }
    ];

    const logout = async () => {
        await handleLogout();
        navigate("/auth");
    };

    return (
        <aside className="sticky top-0 h-screen w-72 border-r border-white/10 bg-white/5 backdrop-blur-3xl">

            {/* Logo */}

            <div className="flex items-center gap-3 border-b border-white/10 p-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">

                    <Sparkles size={24} />

                </div>

                <div>

                    <h1 className="text-xl font-bold">
                        XploreNITK
                    </h1>

                    <p className="text-xs text-zinc-400">
                        Admin Panel
                    </p>

                </div>

            </div>

            {/* Navigation */}

            <nav className="mt-8 px-4">

                {links.map((item) => {

                    const Icon = item.icon;

                    return (

                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/admin"}
                            className={({ isActive }) =>
                                `group mb-3 flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300
                                ${
                                    isActive
                                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/20"
                                        : "hover:bg-white/10"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <div className="flex items-center gap-4">

                                        <Icon
                                            size={22}
                                            className={
                                                isActive
                                                    ? "text-white"
                                                    : "text-zinc-300"
                                            }
                                        />

                                        <span
                                            className={
                                                isActive
                                                    ? "font-semibold"
                                                    : "text-zinc-300"
                                            }
                                        >
                                            {item.title}
                                        </span>

                                    </div>

                                    <ChevronRight
                                        size={18}
                                        className={`transition-all ${
                                            isActive
                                                ? "translate-x-0 opacity-100"
                                                : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                                        }`}
                                    />

                                </>
                            )}

                        </NavLink>

                    );

                })}

            </nav>

            {/* Footer */}

            <div className="absolute bottom-6 left-4 right-4">

                <button
                    onClick={logout}
                    className="flex w-full items-center justify-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 py-4 text-red-400 transition-all duration-300 hover:bg-red-500 hover:text-white"
                >

                    <LogOut size={20} />

                    Logout

                </button>

            </div>

        </aside>
    );
};

export default Sidebar;