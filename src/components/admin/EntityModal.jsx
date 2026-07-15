import { useEffect, useState } from "react";
import { X, Copy } from "lucide-react";
import {
    createEntity,
    updateEntity,
} from "../../services/admin/admin.api.js";

const defaultTimings = [
    { day: "Monday", open: "09:00", close: "17:00", closed: false },
    { day: "Tuesday", open: "09:00", close: "17:00", closed: false },
    { day: "Wednesday", open: "09:00", close: "17:00", closed: false },
    { day: "Thursday", open: "09:00", close: "17:00", closed: false },
    { day: "Friday", open: "09:00", close: "17:00", closed: false },
    { day: "Saturday", open: "09:00", close: "17:00", closed: false },
    { day: "Sunday", open: "", close: "", closed: true },
];

const initialState = {
    name: "",
    category: "",
    description: "",
    location: "",
    image: "",
    coordinates: {
        lat: "",
        lng: "",
    },
    timings: defaultTimings,
};

const EntityModal = ({
    entity,
    close,
    reload,
}) => {

    const [form, setForm] = useState(initialState);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (entity) {

            setForm({
                ...entity,
                coordinates: entity.coordinates || {lat:"", lng: ""},
                timings: entity.timings?.length || defaultTimings
            });

        } else {

            setForm(initialState);

        }

    }, [entity]);

    const handleChange = (e) => {

        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

    };

    const updateTiming = (index, field, value) => {

        const timings = [...form.timings];

        timings[index][field] = value;

        setForm(prev => ({
            ...prev,
            timings,
        }));

    };

    const toggleClosed = (index) => {

        const timings = [...form.timings];

        timings[index].closed = !timings[index].closed;

        if (timings[index].closed) {
            timings[index].open = "";
            timings[index].close = "";
        }

        setForm(prev => ({
            ...prev,
            timings,
        }));

    };

    const copyMonday = () => {

        const monday = form.timings[0];

        const timings = form.timings.map((day, index) => {

            if (index === 0) return day;

            return {
                ...day,
                open: monday.open,
                close: monday.close,
                closed: monday.closed,
            };

        });

        setForm(prev => ({
            ...prev,
            timings,
        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            if (entity) {

                await updateEntity(entity._id, form);

            } else {

                await createEntity(form);

            }

            reload();

            close();

        } finally {

            setLoading(false);

        }

    };

    const handleCoordinateChange = (e) => {

        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            coordinates: {
                ...prev.coordinates,
                [name]: Number(value),
            },
        }));

    };

    return (

        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">

            <div className="bg-zinc-900 border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8">

                <div className="flex justify-between items-center">

                    <h1 className="text-3xl font-bold">

                        {entity ? "Edit Entity" : "Add Entity"}

                    </h1>

                    <button onClick={close}>

                        <X />

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

                    <div>

                        <label className="text-sm text-zinc-400">
                            Latitude
                        </label>

                        <input
                            type="number"
                            step="any"
                            name="lat"
                            value={form.coordinates.lat}
                            onChange={handleCoordinateChange}
                            className="mt-2 w-full rounded-xl bg-black/20 border border-white/10 p-3"
                        />

                    </div>

                    <div>

                        <label className="text-sm text-zinc-400">
                            Longitude
                        </label>

                        <input
                            type="number"
                            step="any"
                            name="lng"
                            value={form.coordinates.lng}
                            onChange={handleCoordinateChange}
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

                    <div className="md:col-span-2 rounded-2xl border border-white/10 bg-black/20 p-6">

                        <div className="flex items-center justify-between mb-6">

                            <h2 className="text-xl font-semibold">

                                Business Hours

                            </h2>

                            <button
                                type="button"
                                onClick={copyMonday}
                                className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm hover:bg-blue-700 transition"
                            >
                                <Copy size={16} />
                                Copy Monday
                            </button>

                        </div>

                        <div className="space-y-4">

                            {form.timings.map((time, index) => (

                                <div
                                    key={time.day}
                                    className="grid grid-cols-[100px_1fr_1fr_auto] gap-4 items-center"
                                >

                                    <span className="font-medium">

                                        {time.day}

                                    </span>

                                    <input
                                        type="time"
                                        disabled={time.closed}
                                        value={time.open}
                                        onChange={(e) =>
                                            updateTiming(index, "open", e.target.value)
                                        }
                                        className="rounded-xl bg-zinc-800 border border-white/10 p-3 disabled:opacity-40"
                                    />

                                    <input
                                        type="time"
                                        disabled={time.closed}
                                        value={time.close}
                                        onChange={(e) =>
                                            updateTiming(index, "close", e.target.value)
                                        }
                                        className="rounded-xl bg-zinc-800 border border-white/10 p-3 disabled:opacity-40"
                                    />

                                    <label className="flex items-center gap-2 cursor-pointer">

                                        <input
                                            type="checkbox"
                                            checked={time.closed}
                                            onChange={() => toggleClosed(index)}
                                        />

                                        Closed

                                    </label>

                                </div>

                            ))}

                        </div>

                    </div>

                    <div className="md:col-span-2 flex justify-end">

                        <button
                            disabled={loading}
                            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 font-semibold"
                        >

                            {loading
                                ? "Saving..."
                                : entity
                                ? "Update"
                                : "Create"}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

};

export default EntityModal;