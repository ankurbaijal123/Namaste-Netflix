import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);
  console.log(movies)

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Adjust scroll speed

      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-4 relative">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
        {title}
      </h1>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-none whitespace-nowrap space-x-4 p-2 scroll-smooth"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {movies?.map((movie) => (
          <MovieCard key={movie.id} id = {movie.id} posterPath={movie.poster_path} />
          
        ))}
      </div>
    </div>
  );
};

export default MovieList;
