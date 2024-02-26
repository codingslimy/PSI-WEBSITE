import React from 'react';
import '../Style/Program.css';
import'../pages/Login';
import { Link } from 'react-router-dom';




const NavBar = () => (
  <nav className='nav'>
    <div className='logo'>
      <img
        alt="Logo"
        src="https://cdn.discordapp.com/attachments/1205756212445192263/1207363674990313562/Dr.Palamsetty_Innovations123.png?ex=65df600b&is=65cceb0b&hm=d8811294349ee35313077b961c60da34b5a054821e87fd435d7ed27f448f3c38&"
        style={{ height: '30px', width: '100px' }}
      />
    </div>
    <ul className='ul'>
      <li className='li'><Link to="/">Home</Link></li>
      <li className='li'><Link to="/programmes">Our Programmes</Link></li>
      <li className='li'><Link to="/clubs">Clubs</Link></li>
      <li className='li'><Link to="/about">About Us</Link></li>
      <li className='li'><Link to="/contact">Contact Us</Link></li>
    </ul>
    <div className='loginButton'><Link to = "/">Login</Link></div>
  </nav>
);
const SingleImageSection = () => (
  <div>
    <img className="Image" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205756751660453908/1.png?ex=65e2c1fb&is=65d04cfb&hm=fc8d5cfadee94fe6baaca53754fcff3bae73ac996c3758b515e6f92588c0514b&" alt="Single Image" />
  </div>
);




const ProgramSection = ({ title, imageUrl, content, isImageOnRight }) => {
  const containerStyle = {
    className: 'programSection',
    style: {
      flexDirection: isImageOnRight ? 'row-reverse' : 'row',
    },
  };

  return (
    <div style={containerStyle.style} className={containerStyle.className}>
      <img src={imageUrl} alt={title} className='image' />
      <div className='overlay'>
        <div className='text'>Overlay Text</div>
      </div>
      <div className='content'>
        <h2 className='programTitle'>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};



const Footer = () => (
  
  <footer className="footer" style={{display: 'flex', alignItems: 'left', justifyContent: 'space-between', padding: '30px',backgroundColor:' #053047'}}>
    
    <div style={{ marginRight: 'auto', textAlign: 'left' }}>
      <h2 style={{ marginBottom: '5px' }}>Contact Us</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>• Company Name: ABC Corporation</li>
        <li>• Email: info@abccorp.com</li>
        <li>• Phone: (555) 123-4567</li>
        <li>• Address: 123 Main Street, Cityville, State, 12345</li>
      </ul>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 'auto', textAlign: 'left'}}>
      
      <h2 style={{ marginBottom: '10px' }}>Menu</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>• Home</li>
        <li>• About Us</li>
        <li>• Partners</li>
        <li>• Clubs</li>
        <li>• Contact Us</li>
      </ul>
    </div>
    <div style={{ textAlign: 'center' ,display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ width: '300px', height: '100px',   overflow: 'hidden' }}>
  <img
    src="https://cdn.discordapp.com/attachments/1205756212445192263/1207363674990313562/Dr.Palamsetty_Innovations123.png?ex=65df600b&is=65cceb0b&hm=d8811294349ee35313077b961c60da34b5a054821e87fd435d7ed27f448f3c38&"
    alt="Circular Image"
    style={{ width: '270px', height: '60px', marginLeft:'25px',objectFit: 'cover' }}
  />
</div>

      <p style={{fontSize:'1.5rem',marginTop:'5px',marginBottom:'10px'}}>Follow us on</p>
      <div style={{ display: 'flex' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '30%', marginRight: '5px', overflow: 'hidden' }}>
  <img
    src="https://cdn.discordapp.com/attachments/1205756212445192263/1207609856513679431/image_5.png?ex=65e04552&is=65cdd052&hm=0d052c3aebd7b7df75f5f65ad8532f9fdf8f665d78f4ca2c39aa02d6522862e9&"
    alt="GitHUB Logo"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>
<div style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '5px', overflow: 'hidden' }}>
  <img
    src="https://cdn.discordapp.com/attachments/1205756212445192263/1207606714573258772/Google_Icons-09-512.png?ex=65e04265&is=65cdcd65&hm=e7c6d65782130976ff74cb996d7fc194e9be15803d4fba5a6daaa85a32e11fa8&"
    alt="Circular Image"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>

<div style={{ width: '40px', height: '40px', borderRadius: '30%', marginRight: '5px', overflow: 'hidden' }}>
  <img
    src="https://cdn.discordapp.com/attachments/1205756212445192263/1207609856513679431/image_5.png?ex=65e04552&is=65cdd052&hm=0d052c3aebd7b7df75f5f65ad8532f9fdf8f665d78f4ca2c39aa02d6522862e9&"
    alt="GitHUB Logo"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>
      </div>
    </div>
  </footer>
);

const Missions = () => (
  <div className="app">
  <div>
    <NavBar />
    <SingleImageSection />
    <ProgramSection
    
      imageUrl="https://cdn.discordapp.com/attachments/1205756212445192263/1205756751660453908/1.png?ex=65e2c1fb&is=65d04cfb&hm=fc8d5cfadee94fe6baaca53754fcff3bae73ac996c3758b515e6f92588c0514b&"
      
    />
    <ProgramSection
     
      imageUrl="https://cdn.discordapp.com/attachments/1205756212445192263/1205756752927391756/4.png?ex=65e2c1fb&is=65d04cfb&hm=91d0af329371855d57f1068b84ee24174da1c0c9372079b6cf2af7dd058c3ae5&"
     
    />
    <ProgramSection
      
      imageUrl="https://cdn.discordapp.com/attachments/1205756212445192263/1205756751660453908/1.png?ex=65e2c1fb&is=65d04cfb&hm=fc8d5cfadee94fe6baaca53754fcff3bae73ac996c3758b515e6f92588c0514b&"
     
    />
    <ProgramSection
     
      imageUrl="https://cdn.discordapp.com/attachments/1205756212445192263/1205756752927391756/4.png?ex=65e2c1fb&is=65d04cfb&hm=91d0af329371855d57f1068b84ee24174da1c0c9372079b6cf2af7dd058c3ae5&"
     
    />
    <Footer />
  </div>
  </div>
);

export default Missions;