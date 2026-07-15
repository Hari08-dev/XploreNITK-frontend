import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, Save, User, Mail } from "lucide-react";
import { AuthContext } from "../services/auth/auth.context";
import { useAuth } from "../hooks/useAuth";

const UpdateProfile = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const {handleUpdateUser} = useAuth();

    const [name, setName] = useState(user?.name || "");
    const [avatar, setAvatar] = useState(user?.avatar || "");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await handleUpdateUser(user._id, { name, avatar });
            navigate("/profile");
        } catch(err){
            console.log(err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Header */}

            <div className="bg-white shadow-sm sticky top-0 z-10 px-5 py-4 flex items-center">

                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-full hover:bg-gray-100"
                >
                    <ArrowLeft size={22} />
                </button>

                <h1 className="text-xl font-bold ml-3">
                    Update Profile
                </h1>

            </div>

            <div className="max-w-md mx-auto p-5">

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl shadow-lg p-6"
                >

                    {/* Avatar */}

                    <div className="flex flex-col items-center">

                        <img
                            src={avatar}
                            alt="Profile"
                            className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-md"
                        />

                        <div className="relative mt-4 w-full">

                            <Camera
                                size={18}
                                className="absolute left-4 top-4 text-gray-500"
                            />

                            <input
                                type="text"
                                placeholder="Profile Picture URL"
                                value={avatar}
                                onChange={(e) => setAvatar(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                            />

                        </div>

                    </div>

                    {/* Name */}

                    <div className="mt-6">

                        <label className="font-medium flex items-center gap-2 mb-2">
                            <User size={18} />
                            Name
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    {/* Email */}

                    <div className="mt-6">

                        <label className="font-medium flex items-center gap-2 mb-2">
                            <Mail size={18} />
                            Email
                        </label>

                        <input
                            type="email"
                            value={user.email}
                            disabled
                            className="w-full bg-gray-100 border rounded-xl px-4 py-3 text-gray-500 cursor-not-allowed"
                        />

                    </div>

                    {/* Save */}

                    <button
                        type="submit"
                        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex justify-center items-center gap-2 font-semibold transition"
                    >
                        <Save size={20} />
                        Save Changes
                    </button>

                </form>

            </div>

        </div>
    );
};

export default UpdateProfile;