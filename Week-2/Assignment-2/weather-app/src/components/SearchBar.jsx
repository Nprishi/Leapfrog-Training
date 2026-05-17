function SearchBar({ city, setCity, getWeather }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getWeather();
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <button onClick={getWeather}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;