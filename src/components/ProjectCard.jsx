export default function ProjectCard({ project }) {
    return (
        <div className="projects-card">
            <ion-icon class="project-folder-icon" name="folder-outline"></ion-icon>
            <h4 className="project-title">{project.title}</h4>
            <p className="project-description">{project.description}</p>
            <div className="project-footer">
                <span className="project-tag primary-bg">{project.tag}</span>
                <a href={project.githubUrl} className="project-link">View GitHub &rarr;</a>
            </div>
        </div>
    );
}