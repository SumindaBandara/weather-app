import { useState } from "react";
import SearchBar from './components/SearchBar';

import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your key

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === "404") throw new Error("City not found");
      setWeatherData(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Weather App
        </h1>
        <SearchBar onSearch={fetchWeather} />
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </div>
  );
}