// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

//const AboutUs = () => (
//   <MainCard >
//      <Typography variant="body1">
//         lorem ipasdqefqe
//     </Typography>
// </MainCard>
//);




import React from 'react';
import './aboutUs.css'; // Import CSS file


const aboutUs = () => {
  return (
    <MainCard>
      <div className="about-section">
        <h1>About Us </h1>
        <h3>Mission</h3>
        <p>“Empowering Curiosity, One Click at a Time”</p>
        <h3>Vision</h3>
        <p>“A World Where Learning Knows No Barriers”</p>
      </div>

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="/w3images/team1.jpg" alt="Jane" style={{ width: '100%' }} />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <Typography variant="body1">
                Some text that describes Jane lorem ipsum ipsum lorem.
              </Typography>
              <p>jane@example.com</p>
              <button className="button">Contact</button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/w3images/team2.jpg" alt="Mike" style={{ width: '100%' }} />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <Typography variant="body1">
                Some text that describes Mike lorem ipsum ipsum lorem.
              </Typography>
              <p>mike@example.com</p>
              <button className="button">Contact</button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/w3images/team2.jpg" alt="Mike" style={{ width: '100%' }} />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <Typography variant="body1">
                Some text that describes Mike lorem ipsum ipsum lorem.
              </Typography>
              <p>mike@example.com</p>
              <button className="button">Contact</button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/w3images/team2.jpg" alt="Mike" style={{ width: '100%' }} />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <Typography variant="body1">
                Some text that describes Mike lorem ipsum ipsum lorem.
              </Typography>
              <p>mike@example.com</p>
              <button className="button">Contact</button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/w3images/team3.jpg" alt="John" style={{ width: '100%' }} />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <Typography variant="body1">
                Some text that describes John lorem ipsum ipsum lorem.
              </Typography>
              <p>john@example.com</p>
              <button className="button">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </MainCard>
  );
};

export default aboutUs;


