const Shimmer = () => {
  return (
    <div className="mt-20 flex space-x-4 p-4 overflow-hidden">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="w-44 h-64 bg-gray-800 animate-pulse rounded-lg"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
