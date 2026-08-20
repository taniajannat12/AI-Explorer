const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">

            <img
                src="/error.jpg"
                alt="404 Page Not Found"
                className="w-full max-w-2xl"
            />

            <h1 className="text-4xl font-bold mt-6">
                Page Not Found
            </h1>

            <p className="text-gray-400 mt-3">
                Sorry, the page you are looking for does not exist.
            </p>

        </div>
    );
};

export default NotFound;