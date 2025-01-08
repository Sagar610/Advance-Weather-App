import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = ``;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert('Error Msg: ' + data.message);
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="p-10 bg-green-800 shadow-md rounded-lg max-w-lg text-center">
        <h1 className="text-5xl font-bold text-white m-1 sm:text-3xl md:text-4xl">Beginner Weather App</h1>
        <p className="mt-4 text-gray-300 text-lg sm:text-base">Enter a city to get the weather</p>
        <input
          className="mt-5 bg-white text-black font-bold py-2 px-4 rounded-lg"
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
         
        <button
          className="mt-4 bg-blue-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg"
          aria-label="Click me for more information"
          onClick={fetchWeather}
        >
          Get Weather
        </button>

        {weather ? (
          <div className="mt-6 text-white">
            <h2 className="text-2xl font-bold">{weather.name}</h2>
            <p className="text-lg">{weather.weather[0].description}</p>
            <p className="text-lg">Temperature: {weather.main.temp}°C</p>
            <p className="text-lg">Feels Like: {weather.main.feels_like}°C</p>
          </div>
        ) : (
          <p className="mt-6 text-gray-300">No weather data available. Please enter a valid city.</p>
        )}
      </div>
    </div>
  );
};




export default App;
