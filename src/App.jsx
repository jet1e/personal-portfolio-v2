import { useState } from "react";
import './App.css';
import Navigation from "./components/Navigation";
import { educationData} from './data';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from "./components/Research";

// HEADER AND FOOTER AND LANDING SECTIONS
const Header = () => (
  <header className="profile-header">
        {/* HEADING */}
        <div className="profile-info-group">
            {/* Replace this with your actual image path in the public folder */}
            <img src="https://i.ibb.co/1Jv8vZ4D/CJHL3512-copy.jpg" alt="Image of Jet Le" className="profile-image" height="80" />
            <div>
                <h1 className="profile-name">Jet Le</h1>
                <p className="profile-title">Software Engineer & Honours Student</p>
            </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="social-media-summary">
            <div className="social-media-box border-separator">
                <a href="https://github.com/jet1e" className="social-media-icon">
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <p className="social-media-label">GitHub</p>
            </div>
            <div className="social-media-box">
                <a href="https://www.linkedin.com/in/jet-1e/" className="social-media-icon">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <p className="social-media-label">LinkedIn</p>
            </div>
        </div>
    </header>
);

const Footer = () => (
  <footer className="main-footer">
        <p className="contact-info">Contact: <a href="mailto:jet05le@gmail.com" className="primary-text link-style">jet05le@gmail.com</a></p>
        <p className="copyright">&copy; 2025 J. Le. All Rights Reserved.</p>
  </footer>
);

const About = () => (
  <section id="about" className="portfolio-section">
        <h3 className="section-title"> Hi there <span className="wave">👋</span></h3>
        <p className="section-text">I’m a final-year Bachelor of Advanced Science Honours student in Perth. I am fascinated by large-scale, high-impact R&D work with many industry and research experiences across a wide range of challenges. Currently, I have received a scholarship for the CSIRO’s Next Generation Graduates Program (NGGP) and am researching privacy-preserving methods for elderly fall detection.</p>
        <h3 className="section-title sub-title">Education</h3>
        <div className="edu-grid">
            {educationData.map((edu, index) => (
                <div key={index} className="edu-card">
                    <p className="edu-place">{edu.place}</p>
                    <p className="edu-title primary-text">{edu.title}</p>
                    <p className="edu-about">{edu.about}</p>
                </div>
            ))}
        </div>

        <h3 className="section-title sub-title">Tech-Stack</h3>
    </section>
);

// MAIN APP
const renderSection = (activeTab) => {
  switch (activeTab) {
    case 'about':
      return <About />;
    case 'experience':
      return <Experience />;
    case 'projects':
      return <Projects />;
    case 'research':
      // TODO: Placeholder for now
      return <Research />;
    case 'contact':
        return <section id="contact" className="portfolio-section">Contact me at <a href="mailto:jet05le@gmail.com" className="primary-text link-style"> jet05le@gmail.com</a>!</section>;
    default:
        return <About />; // Default to 'about'
  }
};

//Wrapper for smooth tab transitions
const getSectionClassName = (sectionId, activeTab) => {
    if (sectionId === activeTab) {
        return "portfolio-section-wrapper active-section";
    }
    return "portfolio-section-wrapper";
};


export default function App() {
  const [activeTab, setActiveTab] = useState('about')
  return (
        <div className="card-container">
            <Header />
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
            <main className="scrollable-content">
                
                {/* About Section */}
                <div className={getSectionClassName('about', activeTab)}>
                  <About />
                </div>
                
                {/* Experience Section */}
                <div className={getSectionClassName('experience', activeTab)}>
                  <Experience />
                </div>
                
                {/* Projects Section */}
                <div className={getSectionClassName('projects', activeTab)}>
                  <Projects />
                </div>
                
                {/* Research Section */}
                <div className={getSectionClassName('research', activeTab)}>
                  <Research />
                </div>
                
                {/* Contact Section */}
                <div className={getSectionClassName('contact', activeTab)}>
                    <section id="contact" className="portfolio-section">
                      Contact me at <a href="mailto:jet05le@gmail.com" className="primary-text link-style"> jet05le@gmail.com</a>!
                    </section>
                </div>
                
            </main>
            <Footer />
        </div>
    );
}