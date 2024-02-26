import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import "../Style/Login.css";
const LoginForm = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmpassword, setConfirmPassword] = useState('');
const [rememberMe, setRememberMe] = useState(false);
const [showRegister, setShowRegister] = useState(false); // State to manage register form visibility
const [department, setDepartment] = useState('')
const [fullname, setFullName] = useState('')
const [showForgotPassword, setShowForgotPassword] = useState(false);

  
      

const handleEmailChange = (e) => {
setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
setPassword(e.target.value);
};

const handleRememberMeChange = () => {
setRememberMe(!rememberMe);
};

const handleLoginSubmit = (e) => {
e.preventDefault();
//Add your login logic here
};

const handleRegisterSubmit = (e) => {
e.preventDefault();
// Add your registration logic here
};

const handleToggleRegister = () => {
setShowRegister(!showRegister); // Toggle register form visibility
};
const handleDepartmentChange = (e) => {
setDepartment(e.target.value);
};
const handleconfirmpasswordChange = (e) => {
setConfirmPassword(e.target.value);
};
const handleFullNameChange = (e) => {
setFullName(e.target.value);
};
const handleToggleForgotPassword = () => {
setShowForgotPassword(!showForgotPassword); // Toggle forgot password form visibility
};

const handleForgotPasswordSubmit = (e) => {
e.preventDefault();
// Add your forgot password logic here
};


const styles = {
wrapper: {
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
height: '100vh',
// width:'1000px'
      
},
formBox: {
display:'flex',
flexDirection:'row',
background: '#f9f9f9',
padding: '0px',
// borderRadius: '8px',
boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
width: '650px',
fontFamily: 'Arial, sans-serif',
backgroundColor: '#ffffff',
},
inputBox: {
marginBottom: '20px',
width: '340px', // Adjust the width as needed
// height: '40px', // Adjust the height as needed
//       // padding: '10px', // Adjust the padding as needed
//       fontSize: '16px',
      

},
inputField: {
width: '100%',
padding: '10px',
background:'rgba(0,0,0,0.0)',
borderRadius: '5px',
border: '1px solid #ccc',
fontSize: '16px',
boxSizing: 'border-box',
},
rememberForgot: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: '20px',
fontSize: '14px',
},
btn: {
backgroundColor: '#007BFF',
color: '#fff',
padding: '10px 20px',
borderRadius: '5px',
border: 'none',
cursor: 'pointer',
fontSize: '16px',
width: '100%',
},
registerLink: {
fontSize: '14px',
color: '#007BFF',
textDecoration: 'none',
cursor: 'pointer',
},
loginRegister: {
marginTop: '30px',
textAlign: 'center',
},
logintext:{
position:'absolute',
width:'400px'
},
leftSection: {
width: 'calc(100% - 100px )', 
marginRight: '20px',
flex:2, 
padding:'25px',
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
borderRadius: 0,
},
  
rightSection: {
width: '9px',
backgroundColor:'#003a55',
display: 'flex',
flexDirection: 'column',
justifyContent: 'flex-end',
alignItems: 'center',
color: '#fff',
padding: '20px',      
flex:2,
boxShadow:'0 0 10px 0 rgb(0,0,0,0.5)'
},

};
  

return (
<div style={styles.wrapper}>
<div style={styles.formBox}>
{showRegister ? (
<><div style={styles.leftSection}>
<h2 >Sign Up</h2>
<form onSubmit={handleRegisterSubmit}>
<div style={styles.inputBox}>
<input
type="fullname"
value={fullname}
onChange={handleFullNameChange}
placeholder="Full Name"
style={styles.inputField}
required
/>
</div>
<div style={styles.inputBox}>
<input
type="email"
value={email}
onChange={handleEmailChange}
placeholder="Email"
style={styles.inputField}
required
 />
 </div>
<div style={styles.inputBox}>
<input
type="password"
value={password}
onChange={handlePasswordChange}
placeholder="Password"
style={styles.inputField}
required
/>


</div>
<div style={styles.inputBox}>
<input
type="confirm password"
value={confirmpassword}
onChange={handleconfirmpasswordChange}
placeholder="Confirm Password"
style={styles.inputField}
required
/>
</div>
<div style={styles.inputBox}>
                
<select
                 
onChange={handleDepartmentChange}
style={styles.inputField}
required
>
<option value="">Select Department</option>
<option value="CIVIL ENGINEERING">CIVIL ENGINEERING</option>
<option value="COMPUTER SCIENCE & ENGINEERING">COMPUTER SCIENCE & ENGINEERING</option>
<option value="CHEMICAL ENGINEERING">CHEMICAL ENGINEERING</option>
<option value="ENVIRONMENTAL ENGINEERING & MANAGEMENT">ENVIRONMENTAL ENGINEERING & MANAGEMENT</option>
<option value="ELECTRICAL ENGINEERING">ELECTRICAL ENGINEERING</option>
<option value="ELECTRONICS & COMMUNICATION ENGINEERING">ELECTRONICS & COMMUNICATION ENGINEERING</option>
<option value="GEO-ENGINEERING">GEO-ENGINEERING</option>
<option value="INFORMATION TECHNOLOGY & COMPUTER APPLICATIONS">INFORMATION TECHNOLOGY & COMPUTER APPLICATIONS</option>
<option value="INSTRUMENT TECHNOLOGY">INSTRUMENT TECHNOLOGY</option>
<option value="MARINE ENGINEERING">MARINE ENGINEERING</option>
<option value="MECHANICAL ENGINEERING">MECHANICAL ENGINEERING</option>
<option value="METALLURGICAL ENGINEERING">METALLURGICAL ENGINEERING</option>
<option value="ENGINEERING CHEMISTRY">ENGINEERING CHEMISTRY</option>
<option value="HUMANITIES & BASIC SCIENCES">HUMANITIES & BASIC SCIENCES</option>
<option value="APPLIED MATHEMATICS">APPLIED MATHEMATICS</option>
<option value="BIOCHEMISTRY">BIOCHEMISTRY</option>
<option value="BIOTECHNOLOGY">BIOTECHNOLOGY</option>
<option value="BOTANY">BOTANY</option>
<option value="CHEMISTRY">CHEMISTRY</option>
<option value="ENVIRONMENTAL SCIENCES">ENVIRONMENTAL SCIENCES</option>
<option value="FOOD,NUTRITION & DIETETICS">FOOD,NUTRITION & DIETETICS</option>
<option value="GEOGRAPHY">GEOGRAPHY</option>
<option value="GEOLOGY">GEOLOGY</option>
<option value="GEOPHYSICS">GEOPHYSICS</option>
<option value="HUMAN GENETICS">HUMAN GENETICS</option>
<option value="MARINE LIVING RESOURCES">MARINE LIVING RESOURCES</option>
<option value="MATHEMATICS">MATHEMATICS</option>
<option value="METEOROLOGY AND OCEANOGRAPHY">METEOROLOGY AND OCEANOGRAPHY</option>
<option value="MICROBIOLOGY">MICROBIOLOGY</option>
<option value="NUCLEAR PHYSICS">NUCLEAR PHYSICS</option>
<option value="PSYCHOLOGY & PARAPSYCHOLOGY">PSYCHOLOGY & PARAPSYCHOLOGY</option>
<option value="PHYSICS">PHYSICS</option>
<option value="STATISTICS">STATISTICS</option>
<option value="ANTHROPOLOGY">ANTHROPOLOGY</option>
<option value="COMMERCE AND MANAGEMENT STUDIES">COMMERCE AND MANAGEMENT STUDIES</option>
<option value="ECONOMICS">ECONOMICS</option>
<option value="EDUCATION">EDUCATION</option>
<option value="ENGLISH">ENGLISH</option>
<option value="FINE ARTS">FINE ARTS</option>
<option value="HINDI">HINDI</option>
<option value="HISTORY AND ARCHAEOLOGY">HISTORY AND ARCHAEOLOGY</option>
<option value="JOURNALISM & MASS COMMUNICATION">JOURNALISM & MASS COMMUNICATION</option>
<option value="LIBRARY AND INFORMATION SCIENCE">LIBRARY AND INFORMATION SCIENCE</option>
<option value="MUSIC & DANCE">MUSIC & DANCE</option>
<option value="PHILOSOPHY & INFORMATION SCIENCE">PHILOSOPHY & INFORMATION SCIENCE</option>
<option value="PHYSICAL EDUCATION & SPORTS SCIENCES">PHYSICAL EDUCATION & SPORTS SCIENCES</option>
<option value="POLITICAL SCIENCE & PUBLIC ADMINISTRATION">POLITICAL SCIENCE & PUBLIC ADMINISTRATION</option>
<option value="SANSKRIT">SANSKRIT</option>
<option value="SOCIAL WORK">SOCIAL WORK</option>
<option value="SOCIOLOGY">SOCIOLOGY</option>
<option value="TELUGU">TELUGU</option>
<option value="THEATRE ARTS">THEATRE ARTS</option>
<option value="YOGA & CONSCIOUSNESS">YOGA & CONSCIOUSNESS</option>
<option value="ARCHITECTURE">ARCHITECTURE</option>
                  
<option value=""></option>
                  

                  
              
{/* Add more options as needed */}
</select>
</div>
              
              
<button type="submit" style={styles.btn}>Sign Up</button>
</form>
<div style={styles.loginRegister}>
<p>Already have an account? <button onClick={handleToggleRegister} style={styles.registerLink}>Login</button></p>
</div>
</div>

<div style={styles.rightSection}>
{/* Content for the right section */}
<img src='https://cdn.discordapp.com/attachments/1205756212445192263/1207363674990313562/Dr.Palamsetty_Innovations123.png?ex=65df600b&is=65cceb0b&hm=d8811294349ee35313077b961c60da34b5a054821e87fd435d7ed27f448f3c38&' style={{ width: '15%', height:'auto', top:'40%', position:'absolute'}}/>
<p>Signup</p>
<div style={{ display: 'flex', alignItems: 'center', paddingBottom: '70px'}}>

<img src='https://cdn.discordapp.com/attachments/1205044912400371715/1207606690388905984/Google_Icons-09-512.png?ex=65e0425f&is=65cdcd5f&hm=e48c91d65b1ac80d51593a4fb80e7c5ba36c1d60c23f815a34c8b52836afa484&' alt="Image description" style={{ width: '20%', height: 'auto', paddingRight:'80px', paddingRight:'0px', paddingLeft:'50px' }} />
<div style={{ borderLeft: '2px solid white', height: '40px', margin: '0 20px ' }}></div>
<img src='https://cdn.discordapp.com/attachments/1205756212445192263/1207609856513679431/image_5.png?ex=65e04552&is=65cdd052&hm=0d052c3aebd7b7df75f5f65ad8532f9fdf8f665d78f4ca2c39aa02d6522862e9&' alt="Image description" style={{ width: '20%', height: '40px', paddingRight:'60px' }} />
<img src='https://cdn.discordapp.com/attachments/1205756212445192263/1207757766471581786/IMG-20240216-WA0000.jpg?ex=65e0cf12&is=65ce5a12&hm=c9e34367b94601ae6df9b442414970d5c8d3c014dec40c512fdf3c67d6b4c7e9&' style={{ width: '10%', height: '40px', paddingRight:'70px' }} />
</div>
</div>
</>
) : (
<>  <div style={styles.leftSection}>
<h2>Login</h2>
<form onSubmit={handleLoginSubmit}>
<div style={styles.inputBox}>
<input
type="email"
value={email}
onChange={handleEmailChange}
placeholder="Email"
style={styles.inputField}
required
/>
</div>
<div style={styles.inputBox}>
<input
type="password"
value={password}
onChange={handlePasswordChange}
placeholder="Password"
style={styles.inputField}
required
/>
</div>
<div style={styles.rememberForgot}>
<label>
<input
type="checkbox"
checked={rememberMe}
onChange={handleRememberMeChange}
/>
Remember me
</label>
<a href="#" style={styles.registerLink}>Forgot Password?</a>
</div>
<button type="submit" style={styles.btn}>Login</button>
<div style={styles.loginRegister}>
<p>Don't have an account? <button onClick={handleToggleRegister} style={styles.registerLink}>Sign Up</button></p>
</div>
              
</form>
</div>
<div style={styles.rightSection} >
<img src='https://cdn.discordapp.com/attachments/1205756212445192263/1207363674990313562/Dr.Palamsetty_Innovations123.png?ex=65df600b&is=65cceb0b&hm=d8811294349ee35313077b961c60da34b5a054821e87fd435d7ed27f448f3c38&' alt="Image description" style={{ width: '15%', height:'auto', top:'30%', position:'absolute'}} />
<p>Login</p>
<div style={{ display: 'flex', alignItems: 'center', paddingBottom: '80px' }}>
<img src='https://cdn.discordapp.com/attachments/1205044912400371715/1207606690388905984/Google_Icons-09-512.png?ex=65e0425f&is=65cdcd5f&hm=e48c91d65b1ac80d51593a4fb80e7c5ba36c1d60c23f815a34c8b52836afa484&' alt="Image description" style={{ width: '20%', height: 'auto', paddingRight:'0px', paddingLeft:'40px' }} />
<div style={{ borderLeft: '2px solid white', height: '40px', margin: '0 20px ' }}></div>
<img src='https://cdn.discordapp.com/attachments/1205756212445192263/1207609856513679431/image_5.png?ex=65e04552&is=65cdd052&hm=0d052c3aebd7b7df75f5f65ad8532f9fdf8f665d78f4ca2c39aa02d6522862e9&' alt="Image description" style={{ width: '20%', height: 'auto', }}></img>
</div>
</div>
</>
) }
</div>
</div>
);
};

export default LoginForm;