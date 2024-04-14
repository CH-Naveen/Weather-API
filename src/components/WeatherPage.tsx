import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getWeather } from '../services/WeatherService';

interface WeatherData {
  temperature: number;
  weatherDescription: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  // Add more fields as needed
}

const WeatherPage: React.FC = () => {
  const { cityName } = useParams<{ cityName?: string }>(); // Make cityName optional
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherImage, setWeatherImage] = useState<string | null>(null);

  useEffect(() => {
    // Ensure cityName is defined before making the API call
    if (cityName) {
      // Fetch weather data on component mount
      getWeather(cityName).then(data => {
        setWeather(data);
        console.log(data)
        setWeatherImage(getWeatherImage(data.weatherDescription));
      });
    }
  }, [cityName]);

  // Function to map weather description to image
  const getWeatherImage = (weatherDescription: string): string => {
    // Convert weather description to lowercase for case-insensitive comparison
    const helper = weatherDescription.toLowerCase();
  
    // Check if the weather description includes 'clouds'
    if (helper.includes('clouds')) {
      return 'clouds.jpg';
    }
    
    // Check if the weather description is 'clear'
    if (helper.includes('clear')) {
      return 'clear.jpg';
    }
    
    // Check if the weather description is 'rain'
    if (helper.includes('rain')) {
      return 'rain.jpg';
    }

  
    // Default case
    return 'default.jpg';
  };
  

  return (
    
    <div >
    <div className="container mt-4 d-flex justify-content-center">
      <div className="col-md-6"style={{
  backgroundImage: "url('/Designer (1).png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'}}>
        <h2 className="text-center mb-4">Weather for {cityName}</h2>
        {weather ? (
          <div className="card shadow">
            <img src={`${process.env.PUBLIC_URL}/images/${weatherImage || 'default.jpg'}`} className="card-img-top custom-image" alt={weather?.weatherDescription} />
            <div className="card-body">
              <p className="card-text">Temperature: {weather.temperature}°C</p>
              <p className="card-text">Weather Description: {weather.weatherDescription}</p>
              <p className="card-text">Humidity: {weather.humidity}%</p>
              <p className="card-text">Wind Speed: {weather.windSpeed} m/s</p>
              <p className="card-text">Pressure: {weather.pressure} hPa</p>
              {/* Add more weather information as needed */}
            </div>
          </div>
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default WeatherPage;