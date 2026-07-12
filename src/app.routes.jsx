import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Auth from "./pages/Auth.jsx";
import Favorites from "./pages/Favourites.jsx";
import UpdateProfile from "./pages/Updateprofile.jsx";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/update" element={<UpdateProfile />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
    );
}

export default AppRoutes;