import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Auth from "./pages/Auth.jsx";
import Favorites from "./pages/Favourites.jsx";
import UpdateProfile from "./pages/Updateprofile.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import ManageEntities from "./pages/admin/ManageEntities.jsx";
import Users from "./pages/admin/Users.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/update" element={<UpdateProfile />} />
            <Route path="/favorites" element={<Favorites />} />

            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="entities" element={<ManageEntities />} />
                <Route path="users" element={<Users />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;