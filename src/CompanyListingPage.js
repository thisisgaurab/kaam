import React from 'react';

const CompanyListingPage = ({ companies }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Company Listings</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {companies.map((company) => (
          <div key={company.id} style={styles.card}>
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              style={styles.logo}
            />
            <h2>{company.name}</h2>
            <p>{company.description}</p>
            <p>
              <strong>Sponsorship:</strong> {company.sponsorship}
            </p>
            <p>
              <strong>Open Positions:</strong> {company.openPositions}
            </p>
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample styles for cards and other components
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  logo: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
  },
  link: {
    color: 'blue',
    textDecoration: 'underline',
    marginTop: '10px',
  },
};

export default CompanyListingPage;
