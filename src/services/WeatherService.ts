const API_KEY = 'f27f52b96a6945743772946896d66026'; 


export async function getWeather(cityName: string): Promise<any> {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather');
    }
    const data = await response.json();
    return {
      temperature: data.main.temp,
      weatherDescription: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      pressure: data.main.pressure,
      // Add more fields as needed
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
}
