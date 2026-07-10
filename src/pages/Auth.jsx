import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../services/auth/auth.context.jsx";
import Loading from "../components/Loading.jsx";
import GoogleBtn from "../components/GoogleBtn.jsx";

const Auth = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col justify-center px-6">

            <div className="flex flex-col items-center">

                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-xl">

                    <span className="text-white text-4xl font-bold">
                        X
                    </span>

                </div>

                <h1 className="mt-8 text-4xl font-bold text-gray-900">
                    XploreNITK
                </h1>

                <p className="mt-4 text-center text-gray-500 leading-7">
                    Explore your campus,
                    <br />
                    discover places,
                    <br />
                    and navigate effortlessly.
                </p>

            </div>

            <div className="mt-24">

                <GoogleBtn />

            </div>

            <p className="mt-6 text-center text-xs text-gray-400">
                By continuing, you agree to our
                <br />
                Terms & Privacy Policy.
            </p>

        </div>
  );
};

export default Auth;