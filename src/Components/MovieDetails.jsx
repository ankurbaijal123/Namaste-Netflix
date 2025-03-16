import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieDetails = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const {
    title,
    overview,
    release_date,
    genres = [],
    budget,
    revenue,
    runtime,
    tagline,
    homepage,
    vote_average,
    vote_count,
    backdrop_path,
    poster_path,
  } = data || {};

  const formattedReleaseDate = release_date
    ? new Date(release_date).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : "Not Available";

  const backdropUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div
      className="relative flex-1 bg-black p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-xl"
      style={{
        backgroundImage: `url(${backdropUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
      }}
    >
      
    <button
  className="absolute top-4 right-4 bg-white text-black text-xl sm:text-xl font-semibold rounded-2xl px-4 py-2 hover:bg-gray-200 transition duration-200 z-50 cursor-pointer"
  onClick={handleClick}
>
⮜
</button>

  

      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Movie Image and Data */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center sm:space-x-8">
        {/* Movie Poster */}
        {poster_path && (
          <img
            className="w-36 sm:w-48 md:w-64 h-56 sm:h-72 md:h-96 rounded-lg shadow-lg"
            src={posterUrl}
            alt="Movie Poster"
          />
        )}

        {/* Movie Data */}
        <div className="mt-4 sm:mt-0 text-white sm:w-2/3 lg:w-1/2">
          {/* Movie Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
            {title || 'Movie Not Found'}
          </h1>

          {/* Tagline */}
          {tagline && (
            <h2 className="text-xl sm:text-2xl italic mb-4 drop-shadow-md">{tagline}</h2>
          )}

          {/* Movie Overview */}
          <p className="text-base sm:text-lg mb-4 drop-shadow-md">
            {overview || 'No description available.'}
          </p>

          {/* Movie Details */}
          <div className="space-y-4 drop-shadow-md text-sm sm:text-base">
            <p>
              <strong>Release Date:</strong> {formattedReleaseDate}
            </p>
            <p>
              <strong>Genres:</strong>{' '}
              {genres.map((genre) => genre.name).join(', ') || 'No genres available.'}
            </p>
            <p>
              <strong>Budget:</strong> ${budget?.toLocaleString() || 'Not Available'}
            </p>
            <p>
              <strong>Revenue:</strong> ${revenue?.toLocaleString() || 'Not Available'}
            </p>
            <p>
              <strong>Runtime:</strong> {runtime} minutes
            </p>
            <p>
              <strong>Average Vote:</strong> {vote_average || 'Not Available'} ({vote_count}{' '}
              votes)
            </p>

            {/* Movie Homepage */}
            {homepage && (
              <p>
                <strong>More Info:</strong>{' '}
                <a
                  href={homepage}
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Website
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
