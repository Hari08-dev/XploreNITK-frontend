import { useState } from "react";
import {
    Pencil,
    Trash2,
    MapPin
} from "lucide-react";

import DeleteModal from "./DeleteModal.jsx";
import EntityModal from "./EntityModal.jsx";
import { deleteEntity } from "../../services/admin/admin.api.js";

const EntityTable = ({
    entities,
    loading,
    reload,
}) => {

    const [selected, setSelected] = useState(null);

    const [showDelete, setShowDelete] = useState(false);

    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = async () => {

        await deleteEntity(selected._id);

        setShowDelete(false);

        reload();

    };

    if (loading) {

        return (

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

                Loading...

            </div>

        );

    }

    return (

        <>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

                <table className="w-full">

                    <thead className="bg-white/5">

                        <tr>

                            <th className="px-6 py-5 text-left">

                                Name

                            </th>

                            <th className="text-left">

                                Category

                            </th>

                            <th className="text-left">

                                Location

                            </th>

                            <th className="text-left">

                                Status

                            </th>

                            <th className="text-center">

                                Actions

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            entities.map(entity => (

                                <tr

                                    key={entity._id}

                                    className="border-t border-white/5 hover:bg-white/5"

                                >

                                    <td className="px-6 py-5">

                                        <div className="font-semibold">

                                            {entity.name}

                                        </div>

                                    </td>

                                    <td>

                                        {entity.category}

                                    </td>

                                    <td>

                                        <div className="flex items-center gap-2">

                                            <MapPin size={16}/>

                                            {entity.location}

                                        </div>

                                    </td>

                                    <td>

                                        <span

                                            className={`rounded-full px-3 py-1 text-sm ${
                                                entity.status === "open"
                                                    ? "bg-green-500/20 text-green-400"
                                                    : "bg-red-500/20 text-red-400"
                                            }`}

                                        >

                                            {entity.status}

                                        </span>

                                    </td>

                                    <td>

                                        <div className="flex justify-center gap-3">

                                            <button

                                                onClick={() => {

                                                    setSelected(entity);

                                                    setShowEdit(true);

                                                }}

                                                className="rounded-xl bg-blue-600 p-3"

                                            >

                                                <Pencil size={18}/>

                                            </button>

                                            <button

                                                onClick={() => {

                                                    setSelected(entity);

                                                    setShowDelete(true);

                                                }}

                                                className="rounded-xl bg-red-600 p-3"

                                            >

                                                <Trash2 size={18}/>

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

            {

                showDelete &&

                <DeleteModal

                    title="Delete Entity"

                    message={`Delete "${selected.name}"?`}

                    onClose={() => setShowDelete(false)}

                    onConfirm={handleDelete}

                />

            }

            {

                showEdit &&

                <EntityModal

                    entity={selected}

                    close={() => setShowEdit(false)}

                    reload={reload}

                />

            }

        </>

    );

};

export default EntityTable;