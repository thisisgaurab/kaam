import React from 'react';
import './App.css';
import CompanyListingPage from './CompanyListingPage';

function App() {
  const companies = [
    {
      id: 1,
      name: 'Tech Corp',
      logo: 'https://via.placeholder.com/100',
      description:
        'A leading technology company specializing in software development.',
      sponsorship: 'H1B',
      openPositions: 5,
      website: 'https://techcorp.com',
    },
    {
      id: 2,
      name: 'Data Masters',
      logo: 'https://via.placeholder.com/100',
      description: 'A data science company providing AI-driven insights.',
      sponsorship: 'OPT',
      openPositions: 3,
      website: 'https://datamasters.com',
    },
    {
      id: 3,
      name: 'Innovation Labs',
      logo: 'https://via.placeholder.com/100',
      description: 'Innovative solutions for modern business problems.',
      sponsorship: 'H1B, OPT',
      openPositions: 7,
      website: 'https://innovationlabs.com',
    },
  ];

  return (
    <div className="App">
      <CompanyListingPage companies={companies} />
    </div>
  );
}

export default App;
