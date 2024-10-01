import React, { useEffect, useState } from 'react';

// Placeholder for the fetch function that retrieves company data
// You can replace this with an actual API call.
const fetchCompanyData = (companyId) => {
  // Mock data for now, in a real application this should come from an API
  return {
    id: companyId,
    name: 'Tech Corp',
    logo: 'https://via.placeholder.com/150',
    description:
      'Tech Corp is a leading company in software development, specializing in cutting-edge AI solutions.',
    sponsorship: 'H1B, OPT',
    website: 'https://techcorp.com',
    jobOpenings: [
      {
        id: 1,
        title: 'Software Engineer',
        location: 'Remote',
        applyLink: 'https://techcorp.com/jobs/1',
      },
      {
        id: 2,
        title: 'Data Scientist',
        location: 'New York, NY',
        applyLink: 'https://techcorp.com/jobs/2',
      },
      {
        id: 3,
        title: 'Product Manager',
        location: 'San Francisco, CA',
        applyLink: 'https://techcorp.com/jobs/3',
      },
    ],
  };
};

const CompanyDetailPage = ({ companyId }) => {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    // Fetch company data based on the companyId when the component mounts
    const data = fetchCompanyData(companyId);
    setCompanyData(data);
  }, [companyId]);

  if (!companyData) {
    return <p>Loading company details...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* Company Overview */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={companyData.logo}
          alt={`${companyData.name} logo`}
          style={styles.logo}
        />
        <div style={{ marginLeft: '20px' }}>
          <h1>{companyData.name}</h1>
          <p>{companyData.description}</p>
          <p>
            <strong>Sponsorship Status:</strong> {companyData.sponsorship}
          </p>
          <a
            href={companyData.website}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Visit Website
          </a>
        </div>
      </div>

      {/* Job Openings */}
      <div style={{ marginTop: '40px' }}>
        <h2>Current Job Openings</h2>
        <ul style={styles.jobList}>
          {companyData.jobOpenings.map((job) => (
            <li key={job.id} style={styles.jobItem}>
              <h3>{job.title}</h3>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.applyLink}
              >
                Apply Now
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Styles for the page
const styles = {
  logo: {
    width: '150px',
    height: '150px',
    objectFit: 'contain',
  },
  link: {
    color: 'blue',
    textDecoration: 'underline',
  },
  jobList: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  jobItem: {
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
  },
  applyLink: {
    color: 'green',
    textDecoration: 'underline',
  },
};

export default CompanyDetailPage;
