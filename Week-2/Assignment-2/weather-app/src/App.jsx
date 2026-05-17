import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);
    setCity("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="weather-container">
        <SearchBar
          city={city}
          setCity={setCity}
          getWeather={getWeather}
        />
      </div>

      <div className="results">
        {loading && <Loader />}

        {error && <ErrorMessage message={error} />}

        {error && (
          <p className="error">
             {error}. Please try again.
          </p>
        )}

        {!weather && !loading && !error && (
          <p className="info">
            Search a city to see weather details
          </p>
        )}

        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;