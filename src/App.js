import { useState, useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// aead5d1d - Movie Api Key

const API_URL = "http://www.omdbapi.com/?apikey=aead5d1d";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1> Movie Monsters</h1>
      <div className="search">
        <input
          placeholder="Search any movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="Search"
          onClick={() => searchMovies(setSearch)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((firstMovie) => (
            <MovieCard firstMovie={firstMovie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
