import React, { useState } from 'react';
import './AccountSettings.css'; // Import the CSS file

function AccountSettings() {
  const [email, setEmail] = useState(''); // State for email
  const [currentPassword, setCurrentPassword] = useState(''); // State for current password
  const [newPassword, setNewPassword] = useState(''); // State for new password
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  // Function to handle form submission (replace with your actual API call)
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage('New passwords do not match.');
      return;
    }

    try {
      // Replace with your API call to update user information
      const response = await fetch('/api/update-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, currentPassword, newPassword }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'An error occurred.');
      } else {
        // Handle successful update (e.g., clear form, show success message)
        setEmail('');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setErrorMessage('');
        alert('Account information updated successfully!'); // Temporary success alert
      }
    } catch (error) {
      console.error('Error updating user:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="account-settings">
      <h2>Account Settings</h2>
      <p>Welcome to your account settings page!</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="currentPassword">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit">Update Account</button>

        <p className="reset-password">
          <a href="/reset-password">Forgot your password?</a>
        </p>
      </form>
    </div>
  );
}

export default AccountSettings;
