import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { getCities } from '../services/CityService';

const CityTable: React.FC = () => {
  const [cities, setCities] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortedColumn, setSortedColumn] = useState<string>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    // Fetch cities on component mount
    getCities().then(data => setCities(data));
  }, []);

  // Filter cities based on search term
  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort cities based on sorted column and order
  const sortedCities = filteredCities.sort((a, b) => {
    const columnA = a[sortedColumn].toLowerCase();
    const columnB = b[sortedColumn].toLowerCase();
    if (columnA < columnB) return sortOrder === 'asc' ? -1 : 1;
    if (columnA > columnB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  // Handle search input change
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Handle column header click for sorting
  const handleSort = (column: string) => {
    setSortedColumn(column);
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  // Handle city name click to navigate to weather page
  const handleCityClick = (cityName: string) => {
    // Navigate to weather page
    window.location.href = `/weather/${cityName}`;
  };

  // Handle right click to open weather page in new tab
  const handleCityRightClick = (event: MouseEvent<HTMLAnchorElement>, cityName: string) => {
    // Open weather page in new tab
    event.preventDefault();
    window.open(`/weather/${cityName}`, '_blank');
  };

  return (
    <div className='hehe' //style={ {backgroundImage: "url('/Designer (1).png')",
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'repeat'}}
    >
    <div className="container mt-4" style={{
  border: '2px solid white',
  borderRadius: '12px',
  padding: '5px',
  boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
  backgroundImage: "url('/Designer (1).png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}>
      <h2>City Table</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search city..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>City Name</th>
            <th onClick={() => handleSort('country')} style={{ cursor: 'pointer' }}>Country</th>
            <th onClick={() => handleSort('timezone')} style={{ cursor: 'pointer' }}>Timezone</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {sortedCities.map(city => (
            <tr key={city.id}>
              <td>
                <Link
                  to={`/weather/${city.name}`}
                  onClick={() => handleCityClick(city.name)}
                  onContextMenu={event => handleCityRightClick(event, city.name)}
                >
                  {city.name}
                </Link>
              </td>
              <td>{city.country}</td>
              <td>{city.timezone}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default CityTable;
