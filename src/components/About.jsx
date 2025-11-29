import { educationData } from '../data';
import TerminalCard from './TerminalCard';

export default function About() {
    return(
        <section id="about" className="portfolio-section">
            <h3 className="section-title"> Hi there <span className="about-wave">👋</span></h3>
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
            <div className='tech-stack'>
                <TerminalCard />
            </div>
        </section>
        
    );
}
