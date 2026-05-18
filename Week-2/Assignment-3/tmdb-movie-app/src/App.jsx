import { useEffect, useState } from "react";
import { fetchMovies } from "./services/api";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const loadMovies = async (query = "") => {
    const data = await fetchMovies(query);
    setMovies(data);
  };

  useEffect(() => {
    const fetchInitialMovies = async () => {
      await loadMovies();
    };

    fetchInitialMovies();
  }, []);


  return (
    <div className="app">
      <Navbar onSearch={loadMovies} />
  

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
<Footer />

export default App;