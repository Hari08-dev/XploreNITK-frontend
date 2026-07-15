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
import Protected from "./layouts/Protected.jsx";
import { AdminProvider } from "./services/admin/admin.context.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/auth" element={<Auth />} />

            <Route path="/" element={<Protected />}>
                <Route index element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="profile/update" element={<UpdateProfile />} />
                <Route path="favorites" element={<Favorites />} />
            </Route>

            <Route path="/admin" element={<AdminProvider>
                                            <AdminLayout />
                                          </AdminProvider>}>
                <Route index element={<Dashboard />} />
                <Route path="entities" element={<ManageEntities />} />
                <Route path="users" element={<Users />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;