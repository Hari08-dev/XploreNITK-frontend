const DeleteModal = ({
    title = "Delete",
    message = "Are you sure?",
    onConfirm,
    onClose,
}) => {

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

            <div className="w-[420px] rounded-3xl border border-white/10 bg-zinc-900 p-8">

                <h2 className="text-2xl font-bold">

                    {title}

                </h2>

                <p className="mt-4 text-zinc-400">

                    {message}

                </p>

                <div className="mt-8 flex justify-end gap-4">

                    <button

                        onClick={onClose}

                        className="rounded-xl border border-white/10 px-5 py-3"

                    >

                        Cancel

                    </button>

                    <button

                        onClick={onConfirm}

                        className="rounded-xl bg-red-600 px-5 py-3"

                    >

                        Delete

                    </button>

                </div>

            </div>

        </div>

    );

};

export default DeleteModal;