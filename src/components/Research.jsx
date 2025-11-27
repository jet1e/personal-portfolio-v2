import ResearchItem from "./ResearchItem";
import { researchData } from "../data";

export default function Research() {
    return (
        <section id="research" className="portfolio-section">
            <h3 className="section-title"> My Research Work </h3>
            <div className="research-list">
                {researchData.map((research, index) => (
                    <ResearchItem key={index} research={research} /> //KJey is required by react
                ))}
            </div>
        </section>
    );
}