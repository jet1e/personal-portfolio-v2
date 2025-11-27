//----------
// Static data content (I put the first page data however in App.jsx)
//----------
export const educationData = [
    {
        place: "Curtin University",
        title: "Bachelors of Advanced Science (Honours), Computing",
        about: (
            <>
                Current CSIRO Next Generation Graduate Scholarship recipient researching privacy-preserving fall detection. Co-authored in the{" "}
                <a href="https://ieeexplore.ieee.org/document/11012045" className="inline-link">
                    13th International Symposium on Digital Forensics and Security
                </a>.
            </>
        ),
    },
    {
        place: "Guildford Grammar School",
        title: "Western Australian Certificate of Education",
        about: "Peer Support Leader, House Prefect (WB), 2016-2022 Honour Roll for Attitude and Excellence, Academic Honour Society, 1st Basketball, 1st Badminton, PSA/ACC Athlete, Harry Campbell Pope and Instrumental Scholarship (Piano) (2016)",
    },
];

export const experienceData = [
    {
        title: "Software Engineer Intern",
        company: "AI Advancements",
        url: "https://www.aiadvancements.com.au",
        date: "Mar 2025 - Oct 2025",
        description: "Developed an MCP-enabled intelligent agent system in Python to automate business workflows using API’s, LLM’s and prompt engineering. This reduced hours spent on researching and creating business social media and SEO content.",
    },
    {
        title: "Research Software Engineer Intern",
        company: "Harry Perkins Institute of Medical Research",
        url: "https://perkins.org.au",
        date: "Mar 2025 - Oct 2025",
        description: "Built a computer-vision pipeline (Python, OpenCV) to extract and analyse medical imaging documents. Through automation, eliminated human error in the diagnosis of Glaucoma for Ophthalmologists.",
    },
    {
        title: "Software & Embedded Systems Engineer Intern",
        company: "BounceBack",
        url: "https://www.youtube.com/watch?v=JBgnX69Cm70",
        date: "Apr 2024 - Dec 2024",
        description: "Engineered an IoT prototype in C and Arduino to extend the life of tennis balls. Built a full-stack mobile app in React Native with BLE for device monitoring. This product aimed to combat the 10+ million tennis balls thrown out into Australian landfill each year.",
    },
]

export const projectData = [
    {
        title: "Connect Four",
        description: "Group project creating a fullstack application with turn-based and AI modes. Progress is saved via Firebase.",
        tag: "Kotlin",
        githubUrl: "https://github.com/jet1e/ConnectFourApp", // Replace with actual link
    },
    {
        title: "Sudoku Solution Validator",
        description: "Multithreaded solution validator for n x n grid.",
        tag: "C89",
        githubUrl: "https://github.com/jet1e/Multithreaded_SSV",
    },
    {
        title: "Crossy Road Terminal Game",
        description: "Turn-based cross the road game using w,a,s,d.",
        tag: "C89",
        githubUrl: "https://github.com/jet1e/ucp-a1",
    },
]

export const researchData = [
    {
        title: 'Privacy-Preserving Elderly Gait Analysis',
        url: 'https://www.csiro.au/en/',
        supervisor: 'Dr. Tom Gedeon and CSIRO',
        date: 'Commencing January 2026',
        description: 'Awarded the CSIRO Next Generation Graduate program to research the following: "The rising global elderly population requires innovative and proactive solutions to better monitor this vulnerable demographic, particularly for fall detection, which remains a leading cause of injury. At present, continuous gait analysis using sensors offers a powerful medium to predict and detect falls; consequently, these technologies lead to severe privacy concerns when collecting sensitive personal health data with little to no labelled data. This is further challenged by the concept of the privacy-utility trade-off, where, over-generalisation risks data loss, severely impacting fall detection accuracy. This research aims to develop a real-time privacy-preserving gait analysis framework to anonymise older adults living independently whilst preserving enough data to detect falls. This will be achieved through using modern privacy techniques such as federated learning and on-device anonymisation.".',
        tag: 'Computer Vision',
        paperUrl: 'https://www.csiro.au/en/work-with-us/funding-programs/funding/next-generation-graduates-programs/awarded-programs/towards-ai-on-the-edge',
    },
        {
        title: 'Unsupervised Machine Learning Applied to Intrusion Detection',
        url: 'https://staffportal.curtin.edu.au/staff/profile/view/mihai-lazarescu-5a82be19/',
        supervisor: 'Dr. Mihai Lazarescu',
        date: 'Feb 2024 - Oct 2024',
        description: 'I conducted a systematic review on the effectiveness of unsupervised machine learning methods (KNN, K-Mean, K-Medoids, DBSCAN) in a semi-supervised setting on 10+ million network traffic data from the Curtin University Gateway. Models were created in Python, using Sci-Kit and C++. My findings was co-submitted to the 13th International Symposium on Digital Forensics and Security as well as co-authored in the IEEE, "On the Application of Fundamental Clustering Methods to Large Scale Cyber Security Log Classification".',
        tag: 'Unsupervised ML',
        paperUrl: 'https://ieeexplore.ieee.org/document/11012045',
    },
];