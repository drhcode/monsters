import { useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";

// aead5d1d - Movie Api Key

const API_URL = "http://www.omdbapi.com/?apikey=aead5d1d";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Avengers");
  });

  return (
    <div className="app">
      <h1> Movie Monsters</h1>
      <div className="search">
        <input
          placeholder="Search any movie"
          value="Avengers"
          onChange={() => {}}
        />
        <img src={searchIcon} alt="Search" onClick={() => {}} />
      </div>
    </div>
  );
};

export default App;
