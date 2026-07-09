const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
            <div className="flex flex-col items-center gap-4">

                <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

                <h2 className="text-lg font-semibold text-gray-700">
                    Loading...
                </h2>

            </div>
        </div>
    );
};

export default Loading;