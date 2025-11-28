export default function TerminalCard() {
    const stackContent = `
    $ ~/my-tech-stack
    ├── Languages
    │   ├── Python (ML/AI)
    │   ├── Java (Backend)
    │   ├── C (Low-level)
    │   └── HTML/CSS/Javascript (Frontend)
    └── Frameworks
        ├── React (UI Framework)
        ├── Model Context Protocol (MCP)
        └── Scikit-learn + Pandas (ML)

    $ pwd
    /user/projects/stack-overview
  `;

    return(
        <div className="terminal-window">
            <div className="terminal-header">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
            </div>
            <div className="terminal-content">
                <pre>
                    <span className="terminal-user">user@computer:~$ </span>
                    <span>cat my-stack.txt</span>
                    {stackContent}
                    <span className="terminal-user">user@computer:~$ </span>
                    <span className="terminal-cursor">_</span>
                </pre>
            </div>
        </div>
    );
}
