Here's a README file for your Upgiving code:

---

# Upgiving

Upgiving is a React application that provides weather information for various cities. Users can search for cities and view the current weather details for a specific city.

## Installation

To run Upgiving locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/upgiving.git
   ```

2. Navigate to the project directory:
   ```
   cd upgiving
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) and replace `API_KEY` in the code with your API key.

## Usage

To start the application, run:
```
npm start
```

This will launch the application in your default web browser.

## Features

- View a table of cities with their respective countries and timezones.
- Search for cities by name.
- Click on a city name to view its current weather details.
- Right-click on a city name to open the weather details in a new tab.

## Components

### App

The main component responsible for routing and rendering different pages of the application.

### WeatherPage

Displays the current weather details for a specific city.

### CityTable

Displays a table of cities with search functionality and sorting options.

## Dependencies

- React
- react-router-dom
- Bootstrap

## API

The application uses the following APIs:

- [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data.
- [OpenDataSoft API](https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100) to fetch city data.

## Contributing

Contributions to Upgiving are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README file further to suit your project's specific details and requirements! Let me know if there's anything else you'd like to add or modify.
