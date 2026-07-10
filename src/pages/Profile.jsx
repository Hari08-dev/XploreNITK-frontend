import { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../services/auth/auth.context.jsx";
import { useAuth } from "../hooks/useAuth.js";
import Loading from "../components/Loading.jsx"


const Profile = () => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const {handleLogout} = useAuth();

    const Logout = async () => {
        try {
            await handleLogout();
            return <Navigate to='/login' replace />
        } catch (error) {
            console.error(error);
        }
    };

    if(loading){
      return ( <Loading /> );
    }

    if (!user) {
        return <Navigate to='/auth' replace />
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">

            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">

                <div className="flex flex-col items-center">

                    <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
                        {user.name.charAt(0).toUpperCase()}
                    </div>

                </div>

                <div className="mt-8 space-y-4">

                    <div className="border rounded-lg p-4">

                        <p className="text-gray-500 text-sm">
                            Name
                        </p>

                        <p className="font-medium">
                            {user.name}
                        </p>

                    </div>

                    <div className="border rounded-lg p-4">

                        <p className="text-gray-500 text-sm">
                            Email
                        </p>

                        <p className="font-medium">
                            {user.email}
                        </p>

                    </div>

                </div>

                <div className="mt-8 flex gap-3">

                    <button
                        onClick={() => navigate("/")}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
                    >
                        Home
                    </button>

                    <button
                        onClick={Logout}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Profile;