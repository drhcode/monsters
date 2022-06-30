import React from "react";

const MovieCard = ({ firstMovie }) => {
  return (
    <div className="movie">
      <div>
        <p>{firstMovie.Year}</p>
      </div>
      <div>
        <img
          src={
            firstMovie.Poster !== "N/A"
              ? firstMovie.Poster
              : "./src/img/400.png"
          }
          alt={firstMovie.Title}
        />
      </div>
      <div>
        <span>{firstMovie.Type}</span>
      </div>
    </div>
  );
};

export default MovieCard;
