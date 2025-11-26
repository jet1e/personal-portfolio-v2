// Each experience card
export default function ExperienceItem({ job }) {
    return (
        <div className="experience-item">
            <h4 className="job-title"> 
                {job.title} @ <a href={job.url} className="job-company"> {job.company} </a>
            </h4>
            <p className="job-date">{job.date}</p>
            <p className="job-desc">{job.description}</p>
        </div>
    )
}