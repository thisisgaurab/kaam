import React, { useState, useEffect } from 'react';

// Placeholder for fetching user profile data from an API
const fetchUserProfile = (userId) => {
  return {
    id: userId,
    name: 'John Doe',
    email: 'johndoe@example.com',
    savedCompanies: [
      {
        id: 1,
        name: 'Tech Corp',
        logo: 'https://via.placeholder.com/100',
        website: 'https://techcorp.com',
      },
      {
        id: 2,
        name: 'Data Solutions',
        logo: 'https://via.placeholder.com/100',
        website: 'https://datasolutions.com',
      },
    ],
    jobApplications: [
      {
        id: 1,
        jobTitle: 'Software Engineer',
        companyName: 'Tech Corp',
        status: 'In Progress',
      },
      {
        id: 2,
        jobTitle: 'Data Scientist',
        companyName: 'Data Solutions',
        status: 'Applied',
      },
    ],
    preferences: {
      jobType: 'Full-Time',
      location: 'Remote',
      sponsorship: 'H1B, OPT',
    },
  };
};

const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = fetchUserProfile(userId);
    setUserData(data);
  }, [userId]);

  if (!userData) {
    return <p>Loading user profile...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* User Info */}
      <div>
        <h1>{userData.name}'s Profile</h1>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
      </div>

      {/* Saved Companies */}
      <div style={{ marginTop: '30px' }}>
        <h2>Saved Companies</h2>
        <ul style={styles.list}>
          {userData.savedCompanies.map((company) => (
            <li key={company.id} style={styles.listItem}>
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                style={styles.logo}
              />
              <div>
                <h3>{company.name}</h3>
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  Visit Website
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Job Applications */}
      <div style={{ marginTop: '30px' }}>
        <h2>Job Applications</h2>
        <ul style={styles.list}>
          {userData.jobApplications.map((application) => (
            <li key={application.id} style={styles.listItem}>
              <h3>
                {application.jobTitle} at {application.companyName}
              </h3>
              <p>
                <strong>Status:</strong> {application.status}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* User Preferences */}
      <div style={{ marginTop: '30px' }}>
        <h2>Preferences</h2>
        <p>
          <strong>Job Type:</strong> {userData.preferences.jobType}
        </p>
        <p>
          <strong>Location:</strong> {userData.preferences.location}
        </p>
        <p>
          <strong>Sponsorship:</strong> {userData.preferences.sponsorship}
        </p>
      </div>
    </div>
  );
};

// Styles for the page
const styles = {
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  listItem: {
    padding: '10px 0',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    width: '50px',
    height: '50px',
    marginRight: '20px',
  },
  link: {
    color: 'blue',
    textDecoration: 'underline',
  },
};

export default UserProfile;
