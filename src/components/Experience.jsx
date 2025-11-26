import ExperienceItem from "./ExperienceItem";
import { experienceData } from "../data";

export default function Experience() {
    return (
        <section id="experience" className="portfolio-section">
            <h3 className="section-title"> Professional Experience </h3>
            <div className="experience-list">
                {experienceData.map((job, index) => (
                    <ExperienceItem key={index} job={job} /> //KJey is required by react
                ))}
            </div>
        </section>
    );
}