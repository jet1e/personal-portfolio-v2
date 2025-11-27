export default function ResearchItem({ research }) {
    return (
        <div className="research-item">
            <div class="research-header">
                <h4 className="research-title"> 
                {research.title}
                </h4>
                <a href={research.url} className="research-supervisor"> {research.supervisor} </a>
            </div>
            <p className="research-date">{research.date}</p>
            <p className="research-desc">{research.description}</p>
            <div className="research-footer">
                <span className="research-tag primary-bg">{research.tag}</span>
                <a href={research.paperUrl} className="research-link">See more &rarr;</a>
            </div>
        </div>
    )
}