import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityTable from './components/CityTable';
import WeatherPage from './components/WeatherPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<CityTable />} />
          <Route path="/weather/:cityName" element={<WeatherPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
