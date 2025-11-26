const tabs = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },    
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'contact', label: 'Contact' },
];

export default function Navigation({ activeTab, onTabChange }) {
    return (
        <nav className="tabs-nav">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    data-section={tab.id}
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    // This is the key difference from your old JS: we call a function passed from the parent
                    onClick={() => onTabChange(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </nav>
    );
}