import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/Loading.jsx";
import { useContext } from "react";
import { AuthContext } from "../services/auth/auth.context.jsx";

const Protected = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <Loading />;

    if (!user) return <Navigate to="/auth" replace />;

    return <Outlet />;
};

export default Protected;