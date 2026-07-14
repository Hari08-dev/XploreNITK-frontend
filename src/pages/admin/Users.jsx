import { useEffect, useState } from "react";
import {
    Search,
    RefreshCw,
    Shield,
    User
} from "lucide-react";

import {
    getUsers,
    updateUserRole
} from "../../services/admin/admin.api";

const Users = () => {

    const [users,setUsers] = useState([]);

    const [filtered,setFiltered] = useState([]);

    const [search,setSearch] = useState("");

    const [loading,setLoading] = useState(true);

    const loadUsers = async()=>{

        try{

            setLoading(true);

            const data = await getUsers();

            setUsers(data);

            setFiltered(data);

        }finally{

            setLoading(false);

        }

    };

    useEffect(()=>{

        loadUsers();

    },[]);

    useEffect(()=>{

        const temp = users.filter(user=>

            user.name.toLowerCase().includes(search.toLowerCase()) ||

            user.email.toLowerCase().includes(search.toLowerCase())

        );

        setFiltered(temp);

    },[search,users]);

    const changeRole = async(id,role)=>{

        await updateUserRole(id,role);

        loadUsers();

    };

    return(

        <div className="space-y-8">

            <div className="flex justify-between">

                <div>

                    <h1 className="text-4xl font-bold">

                        Users

                    </h1>

                    <p className="mt-2 text-zinc-400">

                        Manage registered users.

                    </p>

                </div>

                <button

                    onClick={loadUsers}

                    className="rounded-2xl border border-white/10 px-5 flex items-center gap-2 hover:bg-white/10"

                >

                    <RefreshCw size={18}/>

                    Refresh

                </button>

            </div>

            <div className="relative">

                <Search

                    className="absolute left-4 top-4 text-zinc-500"

                    size={18}

                />

                <input

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                    placeholder="Search users..."

                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 outline-none"

                />

            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

                <table className="w-full">

                    <thead className="bg-white/5">

                        <tr>

                            <th className="px-6 py-5 text-left">

                                User

                            </th>

                            <th className="text-left">

                                Email

                            </th>

                            <th className="text-left">

                                Joined

                            </th>

                            <th className="text-left">

                                Role

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            loading

                            ?

                            <tr>

                                <td

                                    colSpan={4}

                                    className="py-10 text-center"

                                >

                                    Loading...

                                </td>

                            </tr>

                            :

                            filtered.map(user=>(

                                <tr

                                    key={user._id}

                                    className="border-t border-white/5 hover:bg-white/5"

                                >

                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-4">

                                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">

                                                {

                                                    user.name

                                                        .charAt(0)

                                                        .toUpperCase()

                                                }

                                            </div>

                                            <span className="font-semibold">

                                                {user.name}

                                            </span>

                                        </div>

                                    </td>

                                    <td>

                                        {user.email}

                                    </td>

                                    <td>

                                        {

                                            new Date(user.createdAt)

                                            .toLocaleDateString()

                                        }

                                    </td>

                                    <td>

                                        <select

                                            value={user.role}

                                            onChange={(e)=>

                                                changeRole(

                                                    user._id,

                                                    e.target.value

                                                )

                                            }

                                            className="rounded-xl border border-white/10 bg-black/20 px-3 py-2"

                                        >

                                            <option value="user">

                                                User

                                            </option>

                                            <option value="admin">

                                                Admin

                                            </option>

                                        </select>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default Users;