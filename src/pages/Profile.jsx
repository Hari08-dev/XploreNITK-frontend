import { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { User, Mail, Heart, Pencil, Home, LogOut, ChevronRight } from "lucide-react";
import { AuthContext } from "../services/auth/auth.context";
import { useAuth } from "../hooks/useAuth";
import Loading from "../components/Loading";

const Profile = () => {
    const { user, loading } = useContext(AuthContext);
    const { handleLogout } = useAuth();
    const navigate = useNavigate();

    const Logout = async () => {
        try {
            await handleLogout();
            navigate("/auth", { replace: true });
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) return <Loading />;

    if (!user) {
        return <Navigate to="/auth" replace />;
    }

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Top Bar */}
            <div className="bg-white shadow-sm px-5 py-4 flex items-center justify-between sticky top-0 z-10">

                <h1 className="text-2xl font-bold">
                    Profile
                </h1>

                <button
                    onClick={() => navigate("/")}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                    <Home size={24} />
                </button>

            </div>

            <div className="max-w-md mx-auto p-5">

                {/* Profile Card */}
                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <div className="flex flex-col items-center">

                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-md"
                        />

                        <h2 className="text-2xl font-bold mt-4">
                            {user.name}
                        </h2>

                        <p className="text-gray-500 flex items-center gap-2 mt-1">
                            <Mail size={16} />
                            {user.email}
                        </p>

                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-8">

                        <div className="bg-red-50 rounded-2xl p-5 text-center">

                            <Heart
                                className="mx-auto text-red-500"
                                size={28}
                            />

                            <p className="text-2xl font-bold mt-2">
                                {user.favorites?.length || 0}
                            </p>

                            <p className="text-gray-500 text-sm">
                                Favorites
                            </p>

                        </div>

                        <div className="bg-blue-50 rounded-2xl p-5 text-center">

                            <User
                                className="mx-auto text-blue-600"
                                size={28}
                            />

                            <p className="text-lg font-semibold mt-2">
                                {user.role}
                            </p>

                            <p className="text-gray-500 text-sm">
                                Account
                            </p>

                        </div>

                    </div>

                    {/* Menu */}

                    <div className="mt-8 space-y-3">

                        <button
                            onClick={() => navigate("/favorites")}
                            className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-100 transition"
                        >
                            <div className="flex items-center gap-3">

                                <Heart
                                    size={22}
                                    className="text-red-500"
                                />

                                <span className="font-medium">
                                    My Favorites
                                </span>

                            </div>

                            <ChevronRight size={20} />

                        </button>

                        <button
                            onClick={() => navigate("/profile/update")}
                            className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-100 transition"
                        >
                            <div className="flex items-center gap-3">

                                <Pencil
                                    size={22}
                                    className="text-blue-600"
                                />

                                <span className="font-medium">
                                    Update Profile
                                </span>

                            </div>

                            <ChevronRight size={20} />

                        </button>

                    </div>

                    {/* Logout */}

                    <button
                        onClick={Logout}
                        className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl flex justify-center items-center gap-2 font-semibold transition"
                    >
                        <LogOut size={20} />
                        Logout
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Profile;