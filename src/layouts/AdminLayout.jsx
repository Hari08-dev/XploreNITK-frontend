import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar.jsx";
import Navbar from "../components/admin/Navbar.jsx";

const AdminLayout = () => {
    return (
        <div className="min-h-screen bg-[#09090B] text-white">

            {/* Background Blur */}

            <div className="fixed inset-0 overflow-hidden -z-10">

                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

                <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

                <div className="absolute bottom-0 left-1/2 h-96 w-96 rounded-full bg-purple-500/20 blur-[160px]" />

            </div>

            <div className="flex">

                <Sidebar />

                <div className="flex flex-col flex-1 min-h-screen">

                    <Navbar />

                    <main className="flex-1 overflow-y-auto p-8">

                        <Outlet />

                    </main>

                </div>

            </div>

        </div>
    );
};

export default AdminLayout;