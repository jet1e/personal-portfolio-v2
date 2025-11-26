import ProjectCard from './ProjectCard';
import { projectData } from '../data';

export default function Projects() {
    return (
        <section id="projects" className="portfolio-section">
            <h3 className="section-title"> Projects </h3>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}