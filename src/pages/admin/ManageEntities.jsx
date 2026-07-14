import { useEffect, useState } from "react";
import {
    Plus,
    Search,
    Filter,
    RefreshCw
} from "lucide-react";

import EntityTable from "../../components/admin/EntityTable.jsx";
import EntityModal from "../../components/admin/EntityModal.jsx";
import { getEntities } from "../../services/admin/admin.api.js";

const ManageEntities = () => {

    const [entities, setEntities] = useState([]);

    const [filtered, setFiltered] = useState([]);

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");

    const [loading, setLoading] = useState(true);

    const [showModal, setShowModal] = useState(false);

    const loadEntities = async () => {

        try {

            setLoading(true);

            const data = await getEntities();

            setEntities(data);

            setFiltered(data);

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadEntities();

    }, []);

    useEffect(() => {

        let temp = [...entities];

        if (category !== "All") {

            temp = temp.filter(
                entity => entity.category === category
            );

        }

        if (search.trim()) {

            temp = temp.filter(entity =>

                entity.name.toLowerCase().includes(search.toLowerCase()) ||

                entity.location.toLowerCase().includes(search.toLowerCase())

            );

        }

        setFiltered(temp);

    }, [search, category, entities]);

    const categories = [

        "All",

        ...new Set(
            entities.map(e => e.category)
        )

    ];

    return (

        <div className="space-y-8">

            <div className="flex justify-between items-center">

                <div>

                    <h1 className="text-4xl font-bold">

                        Manage Entities

                    </h1>

                    <p className="text-zinc-400 mt-2">

                        Add, edit and delete campus locations.

                    </p>

                </div>

                <button

                    onClick={() => setShowModal(true)}

                    className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-semibold transition hover:scale-105"

                >

                    <Plus size={20}/>

                    Add Entity

                </button>

            </div>

            {/* Toolbar */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">

                <div className="grid lg:grid-cols-3 gap-4">

                    <div className="relative">

                        <Search

                            size={18}

                            className="absolute left-4 top-4 text-zinc-500"

                        />

                        <input

                            value={search}

                            onChange={(e)=>setSearch(e.target.value)}

                            placeholder="Search entities..."

                            className="w-full rounded-2xl bg-black/20 border border-white/10 pl-11 pr-4 py-3 outline-none focus:border-blue-500"

                        />

                    </div>

                    <div className="relative">

                        <Filter

                            size={18}

                            className="absolute left-4 top-4 text-zinc-500"

                        />

                        <select

                            value={category}

                            onChange={(e)=>setCategory(e.target.value)}

                            className="w-full rounded-2xl bg-black/20 border border-white/10 pl-11 pr-4 py-3 outline-none"

                        >

                            {

                                categories.map(cat=>(

                                    <option

                                        key={cat}

                                        value={cat}

                                    >

                                        {cat}

                                    </option>

                                ))

                            }

                        </select>

                    </div>

                    <button

                        onClick={loadEntities}

                        className="rounded-2xl border border-white/10 flex justify-center items-center gap-2 hover:bg-white/10"

                    >

                        <RefreshCw size={18}/>

                        Refresh

                    </button>

                </div>

            </div>

            <EntityTable

                loading={loading}

                entities={filtered}

                reload={loadEntities}

            />

            {

                showModal &&

                <EntityModal

                    close={()=>setShowModal(false)}

                    reload={loadEntities}

                />

            }

        </div>

    );

};

export default ManageEntities;