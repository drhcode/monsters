import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "./src/img/400.png"}
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
      </div>
    </div>
  );
};

export default MovieCard;
