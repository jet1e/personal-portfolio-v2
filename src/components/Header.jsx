export default function Header() {
    return(
        <header className="profile-header">
            {/* HEADING */}
            <div className="profile-info-group">
                {/* Replace this with your actual image path in the public folder */}
                <img src="https://i.ibb.co/1Jv8vZ4D/CJHL3512-copy.jpg" alt="Image of Jet Le" className="profile-image" height="80" />
                <div>
                    <h1 className="profile-name">Jet Le</h1>
                    <p className="profile-title">Software Engineer & Honours Student</p>
                </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="social-media-summary">
                <div className="social-media-box border-separator">
                    <a href="https://github.com/jet1e" className="social-media-icon">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                    <p className="social-media-label">GitHub</p>
                </div>
                <div className="social-media-box">
                    <a href="https://www.linkedin.com/in/jet-1e/" className="social-media-icon">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <p className="social-media-label">LinkedIn</p>
                </div>
            </div>
        </header>
    );
}
