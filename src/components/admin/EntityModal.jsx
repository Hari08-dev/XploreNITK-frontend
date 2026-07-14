import { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
    createEntity,
    updateEntity
} from "../../services/admin/admin.api";

const initialState = {
    name: "",
    category: "",
    description: "",
    location: "",
    image: "",
    status: "open"
};

const EntityModal = ({
    entity,
    close,
    reload
}) => {

    const [form, setForm] = useState(initialState);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if(entity){

            setForm(entity);

        }

    }, [entity]);

    const handleChange = (e)=>{

        setForm(prev=>({

            ...prev,

            [e.target.name]: e.target.value

        }));

    };

    const handleSubmit = async(e)=>{

        e.preventDefault();

        try{

            setLoading(true);

            if(entity){

                await updateEntity(entity._id,form);

            }

            else{

                await createEntity(form);

            }

            reload();

            close();

        }

        finally{

            setLoading(false);

        }

    };

    return(

        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">

            <div className="bg-zinc-900 border border-white/10 rounded-3xl w-full max-w-3xl p-8">

                <div className="flex justify-between items-center">

                    <h1 className="text-3xl font-bold">

                        {entity ? "Edit Entity" : "Add Entity"}

                    </h1>

                    <button onClick={close}>

                        <X/>

                    </button>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="grid md:grid-cols-2 gap-6 mt-8"
                >

                    <div>

                        <label className="text-sm text-zinc-400">

                            Name

                        </label>

                        <input

                            name="name"

                            value={form.name}

                            onChange={handleChange}

                            className="mt-2 w-full rounded-xl bg-black/20 border border-white/10 p-3"

                        />

                    </div>

                    <div>

                        <label className="text-sm text-zinc-400">

                            Category

                        </label>

                        <input

                            name="category"

                            value={form.category}

                            onChange={handleChange}

                            className="mt-2 w-full rounded-xl bg-black/20 border border-white/10 p-3"

                        />

                    </div>

                    <div>

                        <label className="text-sm text-zinc-400">

                            Location

                        </label>

                        <input

                            name="location"

                            value={form.location}

                            onChange={handleChange}

                            className="mt-2 w-full rounded-xl bg-black/20 border border-white/10 p-3"

                        />

                    </div>

                    <div>

                        <label className="text-sm text-zinc-400">

                            Image URL

                        </label>

                        <input

                            name="image"

                            value={form.image}

                            onChange={handleChange}

                            className="mt-2 w-full rounded-xl bg-black/20 border border-white/10 p-3"

                        />

                    </div>

                    <div className="md:col-span-2">

                        <label className="text-sm text-zinc-400">

                            Description

                        </label>

                        <textarea

                            rows={5}

                            name="description"

                            value={form.description}

                            onChange={handleChange}

                            className="mt-2 w-full rounded-xl bg-black/20 border border-white/10 p-3"

                        />

                    </div>

                    <div>

                        <label className="text-sm text-zinc-400">

                            Status

                        </label>

                        <select

                            name="status"

                            value={form.status}

                            onChange={handleChange}

                            className="mt-2 w-full rounded-xl bg-black/20 border border-white/10 p-3"

                        >

                            <option value="open">

                                Open

                            </option>

                            <option value="closed">

                                Closed

                            </option>

                            <option value="crowded">

                                Crowded

                            </option>

                        </select>

                    </div>

                    <div className="flex justify-end items-end">

                        <button

                            disabled={loading}

                            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 font-semibold"

                        >

                            {

                                loading

                                ?

                                "Saving..."

                                :

                                entity

                                ?

                                "Update"

                                :

                                "Create"

                            }

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

};

export default EntityModal;