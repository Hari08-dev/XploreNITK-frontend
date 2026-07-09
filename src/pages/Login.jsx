import { useContext, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../services/auth/auth.context.jsx";
import { useAuth } from "../hooks/useAuth.js";
import Loading from "../components/Loading.jsx"

const Login = () => {
    const navigate = useNavigate();

    const { user, loading } = useContext(AuthContext);
    
    const { handleLogin } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        try {

            await handleLogin(formData);
            return <Navigate to='/' replace />

        } catch (err) {
            setError(err.response?.data?.message || "something went wrong");
        }
    };

    if(loading){
        return( <Loading />);
    }

    if(user){
        return <Navigate to='/' replace />
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

                <h1 className="text-3xl font-bold text-center mb-2">
                    Campus Guide
                </h1>

                <p className="text-center text-gray-500 mb-8">
                    Login to continue
                </p>

                {error && (
                    <div className="bg-red-100 text-red-600 p-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div>
                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                            required
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                            required
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <button
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center mt-6">

                    Don't have an account?{" "}

                    <Link
                        to="/register"
                        className="text-blue-600 font-semibold"
                    >
                        Register
                    </Link>

                </p>

            </div>

        </div>
    );
};

export default Login;