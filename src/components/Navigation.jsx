import { useEffect, useRef, useState } from 'react';

const tabs = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },    
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'contact', label: 'Contact' },
];

export default function Navigation({ activeTab, onTabChange }) {
    const navRef = useRef(null) // reference to hold button elements

    // Slider current state
    const [indicatorStyle, setIndicatorStyle] = useState({
        left: '0px',
        width: '0px'
    });

    useEffect(() => {
        const activeBtn = navRef.current.querySelector(`.tab-button[data-section="${activeTab}"]`);

        if (activeBtn) {
            const navRect = navRef.current.getBoundingClientRect();
            const btnRect = activeBtn.getBoundingClientRect();

            const newLeft = btnRect.left - navRect.left

            setIndicatorStyle({
                left: `${newLeft}px`,
                width: `${btnRect.width}px`
            });
        }
    }, [activeTab]);

    return (
        <nav className="tabs-nav" ref={navRef}>
            <div className="tab-indicator" style={indicatorStyle}></div>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    data-section={tab.id}
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => onTabChange(tab.id)} // Call function to make change
                >
                    {tab.label}
                </button>
            ))}
        </nav>
    );
}