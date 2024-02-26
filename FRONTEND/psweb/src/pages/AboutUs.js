import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/AboutUs.css';

const AboutUs = () => (
  <div className="app">
    {/* NavBar */}
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
      <div className='loginButton'>Login</div>
    </nav>

    {/* Image1 */}
    <div className="imageSection">
      <img className="image1" src="https://via.placeholder.com/1200x400" alt="About Us Banner" />
    </div>


    {/* AboutSection */}
    <div className="aboutSection">
      <div className="aboutContent">
        <h1 className="introductionHeading">Who are we?</h1>
        <p className="introductionContent">
          Welcome to Dr. Palamsetty Innovations, where we are dedicated to empowering students in their academic journey and beyond. Founded with a passion for education and innovation, we strive to provide comprehensive support to students, helping them excel in their studies and prepare for successful careers.
        </p>
        <p className="introductionContent">
          At Dr. Palamsetty Innovations, we understand the importance of staying ahead in today's rapidly evolving world. That's why we offer a range of services, including academic assistance, internship opportunities, courses, workshops, and seminars.
        </p>
      </div>
    </div>
    <div style={{  }}>
  <hr style={{ borderColor: "#00FF84", width: "95vw",boxShadow: '0px 7px 10px rgba(0, 255, 132, 0.5)' }} />
</div>

    {/* OurWorksSection */}
    <div className="ourWorksSection">
      <h2 className="worksHeading">Our Works</h2>
      <div className="worksContainer">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="work">
            <div>
              <img style={{ width: '100%', height: '268px' }} src={"https://via.placeholder.com/150x150?text=Work${index}"} alt={"image"} />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div><hr style={{ borderColor: "#00FF84", width: "95vw",  }} /></div>

    {/* OurFounderWordsSection */}
    <div className="ourFounderWordsSection">
      <div className="founderWordsHeading">
        <h2>Our Founder's Words</h2>
      </div>
      <div className="founderWordsContent">
        <p className="founderWordsParagraph">
          Welcome to Dr. Palamsetty Innovations, where we are dedicated to empowering students in their academic journey and beyond. Founded with a passion for education and innovation, we strive to provide comprehensive support to students, helping them excel in their studies and prepare for successful careers.
        </p>
        <div className="founderWordsImageContainer">
          <img className="founderWordsImage" src="https://via.placeholder.com/600x400" alt="Our Founder's Words" />
        </div>
      </div>
    </div>
    <div><hr style={{ borderColor: "#00FF84", width: "95vw",  }} /></div>

    {/* OurVisionSection */}
    <div className="ourVisionSection">
      <div className="visionImageContainer">
        <img className="visionImage" src="https://via.placeholder.com/600x400" alt="Our Vision" />
      </div>
      <div className="visionContent">
        <h2>Our Vision</h2>
        <p className="visionParagraph">
          Welcome to Dr. Palamsetty Innovations, where we are dedicated to empowering students in their academic journey and beyond. Founded with a passion for education and innovation, we strive to provide comprehensive support to students, helping them excel in their studies and prepare for successful careers.
          <br />
          At Dr. Palamsetty Innovations, we understand the importance of staying ahead in today's rapidly evolving world. That's why we offer a range of services, including academic assistance, internship opportunities, courses, workshops, and seminars. Our goal is to equip students with the knowledge, skills, and experiences they need to thrive in their academic pursuits and transition seamlessly into the professional realm.
        </p>
      </div>
    </div>
    <div><hr style={{ borderColor: "#00FF84", width: "95vw",  }} /></div>

    {/* ValuesSection */}
    <div className="ourValuesSection">
      <h2>Our Values</h2>
      <div className="valuesContainer">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="value">
            <div className="circle"></div>
            <h3>Value {index}</h3>
          </div>
        ))}
      </div>
    </div>
    <div><hr style={{ borderColor: "#00FF84", width: "95vw",  }} /></div>

    {/* Footer */}
    <footer className="footer" style={{display: 'flex', alignItems: 'left', justifyContent: 'space-between', padding: '30px' ,backgroundColor:' #053047'}}>
    
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
      </div>
);export default AboutUs;