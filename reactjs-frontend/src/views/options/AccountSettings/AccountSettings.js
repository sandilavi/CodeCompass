import React, { useState } from 'react';
import './AccountSettings.css'; // Import the CSS file
import Swal from 'sweetalert2';
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';
import Header from 'layout/MainLayout/Header';
import UserService from 'services/UserService';


function AccountSettings() {
  //const [userName, setuserName] = useState('');
  const [email, setEmail] = useState(''); // State for email
  const [currentPassword, setCurrentPassword] = useState(''); // State for current password
  const [newPassword, setNewPassword] = useState(''); // State for new password
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const theme = useTheme();
  const changepassword = { email, currentPassword, newPassword };
  // Function to handle form submission (replace with your actual API call)
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage('New passwords do not match.');
      return;
    }

    try {
      const response = UserService.userUpdate(email, changepassword);
      console.log((await response).data);

      if ((await response).data == "updated") {
        successfully();
        //setErrorMessage(errorData.message || 'An error occurred.');
        setEmail('');
        setNewPassword('');
        setCurrentPassword('');
        setErrorMessage('');
        setConfirmPassword('')
      } else {
        // Handle successful update (e.g., clear form, show success message)


      }
    } catch (error) {
      console.error('Error updating user:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };



  const successfully = () => {
    Swal.fire({
      title: 'Successfully',
      text: `Account information updated successfully!`,
      icon: 'success',
      iconHtml: "<i class='fas fa-check-circle'></i>",
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("ok");
      }
    });
  }


  return (
    <>
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          // transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
        }}
      >
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
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
    </>
  );
}

export default AccountSettings;
