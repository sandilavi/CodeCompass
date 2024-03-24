// ProfilePopup.js

import React from "react";
import "./profilePopup.css";

const ProfilePopup = () => {
  // Example profile details (you can replace with actual data)
  const name = JSON.parse(localStorage.getItem('name'));
  const email = JSON.parse(localStorage.getItem('email'));
  const profileDetails = {

    name: name,
    email: email,
    // Add other profile properties here

  };

  return (
    <div className="profile-popup">
      <h2>User Profile</h2>
      <p>Name: {profileDetails.name}</p>
      <p>Email: {profileDetails.email}</p>
      {/* Add other profile details */}
    </div>
  );
};


export default ProfilePopup;
