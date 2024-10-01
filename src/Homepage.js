import React, { useState } from 'react';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [sponsorship, setSponsorship] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search Term:', searchTerm);
    console.log('Location:', location);
    console.log('Company Size:', companySize);
    console.log('Sponsorship:', sponsorship);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Job Search App</h1>
      <p>
        This app helps you filter jobs by various criteria including keywords,
        location, company size, and sponsorship type.
      </p>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by job title or keyword"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '300px', marginRight: '10px' }}
      />

      {/* Optional filters */}
      <div style={{ marginTop: '20px' }}>
        <h3>Filters</h3>

        {/* Location Filter */}
        <div style={{ marginBottom: '10px' }}>
          <label>Location (US States): </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ padding: '10px', marginLeft: '10px' }}
          >
            <option value="">Any</option>
            <option value="California">California</option>
            <option value="New York">New York</option>
            <option value="Texas">Texas</option>
            {/* Add more US states as options here */}
          </select>
        </div>

        {/* Company Size Filter */}
        <div style={{ marginBottom: '10px' }}>
          <label>Company Size: </label>
          <select
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
            style={{ padding: '10px', marginLeft: '10px' }}
          >
            <option value="">Any</option>
            <option value="Small (1-50)">Small (1-50 employees)</option>
            <option value="Medium (51-200)">Medium (51-200 employees)</option>
            <option value="Large (200+)">Large (200+ employees)</option>
          </select>
        </div>

        {/* Sponsorship Filter */}
        <div style={{ marginBottom: '20px' }}>
          <label>Type of Sponsorship: </label>
          <select
            value={sponsorship}
            onChange={(e) => setSponsorship(e.target.value)}
            style={{ padding: '10px', marginLeft: '10px' }}
          >
            <option value="">Any</option>
            <option value="H1B">H1B</option>
            <option value="OPT">OPT</option>
            <option value="None">None</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            backgroundColor: 'blue',
            color: 'white',
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default HomePage;
