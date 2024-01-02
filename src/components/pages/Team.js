// src/components/TeamPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../Styles/page/team.css';

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Replace this URL with the actual API endpoint or JSON file URL
    axios.get('http://localhost:4000/team')
      .then(({ data }) => {
        setTeamMembers(data);
      })
      .catch((error) => {
        console.error('Error fetching team member data:', error);
      });
  }, []);

  return (
  <div className='team-con'>
      <div className="team-page container">
      <h1 className="text-center mb-4">Our Team</h1>
      <div className="row">
        {teamMembers.map((member) => (
          <div key={member.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={member.image}
                alt={`${member.name}'s headshot`}
                className="card-img-top rounded-circle"
                width="150"
                height="150"
              />
              <div className="card-body">
                <h2 className="card-title">{member.name}</h2>
                <p className="card-text">{member.role}</p>
                <p className="card-text">
                  <span className="mr-2">&#9733;</span> {/* Star symbol */}
                  {member.description}
                  <span className="ml-2">&#9733;</span> {/* Star symbol */}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default TeamPage;
