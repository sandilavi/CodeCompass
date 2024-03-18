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





import imaImage from '../../views/options/profile/Ima.jpg'; // Import the image
import chamodImage from '../../views/options/profile/chamod.jpg'; // Import the image
import AkilaImage from '../../views/options/profile/Akila.jpg'; // Import the image
import SandilaImage from '../../views/options/profile/Sandila.jpg'; // Import the image
import TeshanImage from '../../views/options/profile/Teshan.jpg'; // Import the image


import './aboutUs.css'; // Import CSS file
import React from 'react';



const aboutUs = () => {
  
  return (
    <MainCard>
      <div className="about-section">
        <h1>Who we are . . </h1>
        <p>Our mission is to empower learners by providing a comprehensive and user-friendly roadmap 
          for mastering programming languages. Through curated content, interactive resources, and personalized guidance,
          we aim to foster continuous growth, enhance skills, and ignite a passion for coding.
           Join us on this journey to unlock your full potential in the world of software development!</p>
        
      
      </div>

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
          <img src={SandilaImage} alt="Sandila" /> {/* Use the imported image */}
            <div className="container">
              <h2>Sandila Vihanga</h2>
              <p className="title">Developer</p>
              <Typography variant="body1">
              Excels in driving projects forward with a focus on machine learning and innovative strategies. 
              leading the team towards excellence with precision and efficiency. 
              


              </Typography>
              <p>sandila.20212073@iit.ac.lk</p>
              <a href="mailto:sandila.20212073@iit.ac.lk" className="button">Email</a> {/* Changed the button text to "Email" */}
              &nbsp; {/* Add a non-breaking space here */}
      
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
          <img src={AkilaImage} alt="Akila" /> {/* Use the imported image */}
            <div className="container">
              <h2>Akila Jayawickrama</h2>
              <p className="title">Developer</p>
              <Typography variant="body1">
              Specializes in server-side technologies and database management, with expertise in languages like Java. 
              Architecting and implementing robust and scalable solutions.
             
      
             
              </Typography>
              <p>akila.20210835@iit.ac.lk</p>
              <a href="mailto:akila.20210835@iit.ac.lk" className="button">Email</a> {/* Changed the button text to "Email" */}
              &nbsp; {/* Add a non-breaking space here */}
  
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
          <img src={chamodImage} alt="chamod" /> {/* Use the imported image */}
            <div className="container">
              <h2>Chamod Gunawardana</h2>
              <p className="title">Developer</p>
              <Typography variant="body1">
              Skilled in creating intuitive and visually appealing user interfaces using HTML, CSS, and 
              JavaScript frameworks like React.
              Transforms designs into seamless web experiences.
              </Typography>
              <p>chamod.20212160@iit.ac.lk</p>
              <a href="mailto:chamod.20212160@iit.ac.lk" className="button">Email</a> {/* Changed the button text to "Email" */}
              &nbsp; {/* Add a non-breaking space here */}
  
            </div>
          </div>
        </div>

        <div className="column bottom"> {/* Apply the 'bottom' class */}
          <div className="card">
          <img src={TeshanImage} alt="Teshan" /> {/* Use the imported image */}
            <div className="container">
              <h2>Teshan Lakruwan</h2>
              <p className="title">Developer</p>
              <Typography variant="body1">
              Dedicated to crafting engaging and user-centric interfaces. 
              Create wireframes, mockups, and prototypes to enhance usability and drive engagement.
            
              </Typography>
              <p>teshan.20212077@iit.ac.lk</p>
              <a href="mailto:teshan.20212077@iit.ac.lk" className="button">Email</a> {/* Changed the button text to "Email" */}
              &nbsp; {/* Add a non-breaking space here */}
  
    
            </div>
          </div>
        </div>

        <div className="column bottom"> {/* Apply the 'bottom' class */}
          <div className="card">
          <img src={imaImage} alt="Ima" /> {/* Use the imported image */}
           
            <div className="container">
              <h2>Imasha Malwaththa</h2>
              <p className="title">Developer</p>
              <Typography variant="body1">
              Excels in both frontend and backend development,Proficient in handling every aspect of web development with precision, 
              they ensure the seamless functionality of our applications.
              </Typography>
              <p>imasha.20212190@iit.ac.lk</p>
              <a href="mailto:imasha.20212190@iit.ac.lk" className="button">Email</a> {/* Changed the button text to "Email" */}
              &nbsp; {/* Add a non-breaking space here */}
  



              </div>
            </div>
          </div>
        </div>
        
      
    </MainCard>
  );
  }

export default aboutUs;
