const Loading = () => {
  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
      <div className="text-center">

        <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <p className="text-white mt-4">
          Loading...
        </p>

      </div>
    </div>
  );
};

export default Loading;