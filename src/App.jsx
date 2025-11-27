import { useState } from "react";
import './App.css';
import Navigation from "./components/Navigation";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from "./components/Research";
import About from './components/About';
import Header from './components/Header';
import Footer from "./components/Footer";

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