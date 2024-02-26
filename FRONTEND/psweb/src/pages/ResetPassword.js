//CODE FOR RESET PASSWORD 
import React, { useState } from 'react';
import "../Style/ResetPassword.css";

const ResetPassword = () => {
 
const [newPassword, setNewPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [successMessage, setSuccessMessage] = useState('');

const handleResetPassword = async () => {
try {
if (newPassword !== confirmPassword) {
setErrorMessage('Passwords do not match');
return;
}
 // Implement reset password logic here
setSuccessMessage('Password reset successful!');
} catch (error) {
console.error('Password reset error:', error.message);
setErrorMessage('Password reset failed. Please try again later.');
}
};

return (
<div style={styles.container}>
<h2>Reset Password</h2>
      
<input
type="password"
placeholder="New Password"
value={newPassword}
onChange={(e) => setNewPassword(e.target.value)}
style={styles.input}
 />
<input
type="password"
placeholder="Confirm Password"
value={confirmPassword}
onChange={(e) => setConfirmPassword(e.target.value)}
style={styles.input}
/>
<button onClick={handleResetPassword} style={styles.button}>Reset Password</button>
{errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
{successMessage && <p style={styles.successMessage}>{successMessage}</p>}
</div>
);
};

const styles = {
container: {
maxWidth: '400px',
margin: 'auto',
padding: '20px',
border: '1px solid #ccc',
borderRadius: '5px',
boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
backgroundColor: '#f9f9f9',
},
input: {
width: '100%',
padding: '10px',
marginBottom: '10px',
borderRadius: '5px',
border: '1px solid #ccc',
},
button: {
width: '100%',
padding: '10px',
backgroundColor: '#007bff',
color: '#fff',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
},
errorMessage: {
color: 'red',
marginTop: '10px',
},
successMessage: {
color: 'green',
marginTop: '10px',
},
};

export default ResetPassword;