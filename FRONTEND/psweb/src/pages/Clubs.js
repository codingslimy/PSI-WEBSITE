import React from 'react';
import '../Style/Clubs.css';
import { Link } from 'react-router-dom';


const Clubs = () => (
  <div className="app">
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
    {/* <div className='headingcontainer'>
      <div className='heading'>Innovation Club.</div>
      <div className='heading'>Technology Club.</div>
      <div className='heading'>R & D Club.</div>
    </div> */}
    {/* <hr style={{borderColor:"#00FF84",width:"99%"}}/>  */}
    <div className="sliderContainer">
      <p>"I am always doing that which I cannot do, in order that I may learn how to do it."</p>
      <p style={{marginTop:"0% ",marginLeft:"55%"}}>- Pablo Picasso</p>
    </div>
    <hr style={{borderColor:"#00FF84",width:"99%"}}/>
    <div>
      <div style={{
        display:"flex",
        marginLeft:"40%"
        }}>
        <p style={{fontSize:"50px",color:"white"}}>Innovation Club.</p>
        <button style={{marginLeft:"37%",height:"50px",marginTop:"7%",backgroundColor:"orange",width:"120px"}}>Join Now</button>
      </div>
      <div>
        <h1 className='para1' style={{color:"white",textAlign:"left"}}>About the Club.</h1>
        <p className='para'>
        Welcome to the Innovation Club at Dr. Palamsetty Innovations, where creativity knows no bounds. Our club serves as a catalyst for innovation, bringing together creative minds from all disciplines to tackle challenges and explore new possibilities.
        </p>
        <h1 className='para1' style={{color:"white",textAlign:"left"}}>What We Provide:</h1>
        <ul className='para'>
          <li>        Workshops: Engaging sessions designed to spark creativity and foster innovative thinking.</li>
          <li>        Brainstorming Sessions: Collaborative environments where members can share ideas and develop innovative solutions.</li>
          <li>        Project Opportunities: Hands-on projects that encourage experimentation and real-world application of innovative ideas.</li>
        </ul>
        <h1 className='para1' style={{color:"white",textAlign:"left"}}>What We Do:</h1>
        <ul className='para'>
          <li>        Ideation: Generating and refining ideas through brainstorming sessions and design thinking methodologies.</li>
          <li>        Prototyping: Bringing ideas to life through prototyping and iterative design processes.</li>
          <li>        Impactful Solutions: Developing innovative solutions to address real-world challenges and drive positive change.</li>
        </ul>
      </div>
      <p style={{fontSize:"35px",color:"white"}}>"Igniting Creativity, Driving Change"</p>
    </div>

    
    <hr style={{borderColor:"#00FF84",width:"99%"}}/>
    <div>
      <div style={{
        display:"flex",
        marginLeft:"40%"
        }}>
        <p style={{fontSize:"50px",color:"white"}}>Technology Club.</p>
        <button style={{marginLeft:"35%",height:"50px",marginTop:"7%",backgroundColor:"orange",width:"120px"}}>Join Now</button>
      </div>
      
      <div >
        <h1 className='para1' style={{color:"white",textAlign:"left"}}>About the Club.</h1>
        <p className='para'>
        Welcome to the Technology Club at Dr. Palamsetty Innovations, where we're passionate about all things tech. Our club provides a platform for students to explore emerging technologies, enhance their technical skills, and stay ahead in the ever-evolving world of technology.
        </p>
        <h1 className='para1' style={{color:"white",textAlign:"left"}}>What We Provide:</h1>
        <ul className='para'>
          <li>        Coding Challenges: Opportunities to sharpen coding skills and tackle coding challenges.</li>
          <li>        Tech Talks: Informative sessions on the latest trends, tools, and technologies in the tech industry.</li>
          <li>        Hackathons: Intensive events where members collaborate to build innovative tech solutions within a limited timeframe.</li>
        </ul>
        <h1 className='para1' style={{color:"white",textAlign:"left"}}>What We Do:</h1>
        <ul className='para'>
          <li>        Skill Development: Offering workshops and tutorials to help members learn new programming languages and tools.</li>
          <li>        Innovation Projects: Collaborating on tech projects ranging from app development to hardware hacking.</li>
          <li>        Industry Engagement: Connecting members with industry professionals and providing networking opportunities in the tech sector.</li>
        </ul>
      
        <p style={{fontSize:"35px",color:"white"}}>"Exploring the Frontiers of Technology"</p>
      </div>
    </div>
    <hr style={{borderColor:"#00FF84",width:"99%"}}/>
    
    <div>
      <div style={{
        display:"flex",
        marginLeft:"28%"
        }}>
        <p style={{fontSize:"50px",color:"white"}}>Research & Development (R&D) Club. </p>
        <button style={{    marginLeft: "10%",
                            height: "50px",
                            marginTop: "5%",
                            backgroundColor: "orange",
                            width: "120px"}}>Join Now</button>
      </div>
      <div>
        <h1 className='para1' style={{color:"white",textAlign:"left"}}>About the Club.</h1>
        <p className='para'>
        Welcome to the Research & Development (R&D) Club at Dr. Palamsetty Innovations, where curiosity meets discovery. Our club is dedicated to advancing knowledge and driving innovation through cutting-edge research and experimentation.
        </p>
        <h1 className='para1' style={{color:"white",textAlign:"left"}}>What We Provide:</h1>
        <ul className='para'>
          <li>            Mentorship: Guidance and support from experienced researchers and industry experts.</li>
          <li>        Seminars: Presentations and discussions on groundbreaking research topics and methodologies.</li>
          <li>        Project Funding: Resources and funding opportunities to support research projects and experiments.</li>
        </ul>
        <h1 className='para1' style={{color:"white",textAlign:"left"}}>What We Do:</h1>
        <ul className='para'>
          <li>            Exploration: Exploring interdisciplinary research topics and pushing the boundaries of knowledge.</li>
          <li>        Experimentation: Designing and conducting experiments to test hypotheses and gather data.</li>
          <li>        Collaboration: Collaborating with peers and experts to tackle complex research challenges and make meaningful discoveries.</li>
        </ul>
      </div>
      <p style={{fontSize:"35px",color:"white"}}>"Pushing the Boundaries of Knowledge"</p>
    </div>
    <hr style={{borderColor:"#00FF84",width:"99%"}}/>

    {/*footer*/}
    <footer className="footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '30px' }}>
        <div style={{ marginRight: 'auto', textAlign: 'left' }}>
          <h2 style={{ marginBottom: '5px' }}>Contact Us</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>• Company Name: ABC Corporation</li>
            <li>• Email: info@abccorp.com</li>
            <li>• Phone: (555) 123-4567</li>
            <li>• Address: 123 Main Street, Cityville, State, 12345</li>
          </ul>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 'auto', textAlign: 'left' }}>
          <h2 style={{ marginBottom: '10px' }}>Menu</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>• Home</li>
            <li>• About Us</li>
            <li>• Partners</li>
            <li>• Clubs</li>
            <li>• Contact Us</li>
          </ul>
        </div>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#ccc', marginBottom: '10px' }}></div>
          <p>Follow us on</p>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ccc', marginRight: '5px' }}></div>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ccc', marginRight: '5px' }}></div>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ccc', marginRight: '5px' }}></div>
          </div>
        </div>
      </footer>
  </div>
);

export default Clubs;
