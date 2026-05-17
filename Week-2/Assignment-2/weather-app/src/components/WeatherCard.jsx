function WeatherCard({ weather }) {
  if (!weather || !weather.main || !weather.weather) return null;

  return (
    <div className="weather-card">

      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />

      <h3>{weather.main.temp}°C</h3>
      <p>{weather.weather[0].description}</p>

      <div className="table-container">
        <table className="weather-table">

          <tbody>

            <tr>
              <td>City</td>
              <td>{weather.name}</td>
            </tr>

            <tr>
              <td>Country</td>
              <td>{weather.sys.country}</td>
            </tr>

            <tr>
              <td>Latitude</td>
              <td>{weather.coord.lat}</td>
            </tr>

            <tr>
              <td>Longitude</td>
              <td>{weather.coord.lon}</td>
            </tr>

            <tr>
              <td>Feels Like</td>
              <td>{weather.main.feels_like}°C</td>
            </tr>

            <tr>
              <td>Min Temp</td>
              <td>{weather.main.temp_min}°C</td>
            </tr>

            <tr>
              <td>Max Temp</td>
              <td>{weather.main.temp_max}°C</td>
            </tr>

            <tr>
              <td>Pressure</td>
              <td>{weather.main.pressure} hPa</td>
            </tr>

            <tr>
              <td>Humidity</td>
              <td>{weather.main.humidity}%</td>
            </tr>

            <tr>
              <td>Visibility</td>
              <td>{weather.visibility} m</td>
            </tr>

            <tr>
              <td>Wind Speed</td>
              <td>{weather.wind.speed} m/s</td>
            </tr>

            <tr>
              <td>Wind Direction</td>
              <td>{weather.wind.deg}°</td>
            </tr>

            <tr>
              <td>Wind Gust</td>
              <td>{weather.wind.gust || "N/A"}</td>
            </tr>

            <tr>
              <td>Cloudiness</td>
              <td>{weather.clouds.all}%</td>
            </tr>

            <tr>
              <td>Sunrise</td>
              <td>
                {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
              </td>
            </tr>

            <tr>
              <td>Sunset</td>
              <td>
                {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
              </td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>
  );
}

export default WeatherCard;