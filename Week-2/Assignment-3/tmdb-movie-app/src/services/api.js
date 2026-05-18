const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query = "popular") => {
  try {
    const endpoint =
      query === "popular"
        ? `${BASE_URL}/movie/popular?api_key=${API_KEY}`
        : `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;

    const response = await fetch(endpoint);
    const data = await response.json();

    return data.results || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};