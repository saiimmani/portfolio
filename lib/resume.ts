export type Project = {
  title: string;
  link?: string;
  timeline?: string;
  bullets: string[];
  technologies?: string[];
  status?: string;
  thumbnail?: string;
};

export type Education = {
  school: string;
  degree: string;
  timeline: string;
  cgpa?: string;
  coursework?: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  category: string;
  date?: string;
  link?: string;
  credentialId?: string;
};

export type ExperienceItem = {
  title: string;
  organization: string;
  timeline: string;
  role: string;
  description: string;
  duration: string;
};

export type Resume = {
  name: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  about: string;
  education: Education[];
  projects: Project[];
  skills: {
    programming: string[];
    technologies: string[];
    concepts: string[];
    softSkills: string[];
    languages?: string[];
  };
  certifications: Certification[];
  extracurricular: ExperienceItem[];
  lastUpdated: string;
};

export const resume: Resume = {
  name: "Immani Rama Venkata Sri Sai",
  location: "India",
  email: "saichowdaryimmani@gmail.com",
  phone: "+91-7569648810",
  github: "https://github.com/saiimmani",
  linkedin: "https://linkedin.com/in/sai-immani",
  about:
    "I am Immani Rama Venkata Sri Sai, currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering at SRM University, where I am developing a strong foundation in software development, algorithms, and cutting-edge technologies.",
  education: [
    {
      school: "SRM Institute of Science and Technology",
      degree: "B.Tech in Computer Science and Engineering",
      timeline: "Aug 2023 – May 2027",
      cgpa: "CGPA: 9.03 (as of 5th semester)",
      coursework: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Database Management Systems",
        "Artificial Intelligence",
        "Design and Analysis of Algorithms",
        "Computer Organization and Architecture",
        "IoT",
        "Formal Language and Automata",
        "Software Engineering and Project Management",
        "Data Mining and Analytics",
        "Machine Learning",
        "Compiler Design"
      ]
    }
  ],
  projects: [
    {
      title: "Gesture Controlled Robot Using MPU-6050",
      timeline: "In-House Project – Jan 2025 to Jan 2026",
      thumbnail: "/robot.png",
      bullets: [
        "Building a gesture-based robotic system that allows users to control robot movement through natural hand motions using the MPU-6050 (accelerometer + gyroscope).",
        "Transmitter uses an Arduino Nano connected to the MPU-6050 to capture and process real-time gesture data.",
        "Processed gesture data is wirelessly transmitted to the robot using the Zigbee protocol for long-range, low-power communication.",
        "Robot is powered by an Arduino Mega, translating Zigbee signals into motor control commands via the motor driver.",
        "Key features: real-time gesture recognition with orientation data, reliable Zigbee communication, modular architecture for expandable sensor integration.",
        "Technologies and components: Arduino Nano, Arduino Mega, MPU-6050, Zigbee modules, motor driver, Embedded C.",
        "Status: Successfully capturing and transmitting gesture data wirelessly; optimizing response time and motion stability."
      ]
    },
    {
      title: "Face Recognition Attendance System Using AI Algorithms",
      link: "https://github.com/saiimmani/FaceRecognitionAttendanceSystem",
      thumbnail: "/Face.png",
      bullets: [
        "Developed an automated attendance system using real-time face recognition with Python, OpenCV, and the face recognition library.",
        "Enabled accurate face detection and recognition using ML algorithms; supports capturing faces, marking attendance, and managing data via Pandas.",
        "Built a user-friendly GUI with Tkinter to facilitate registration and attendance tracking, improving efficiency and security in institutional environments.",
        "Tools used: Python, OpenCV, face recognition, Tkinter, Pandas, Pillow, Scikit-learn."
      ]
    },
    {
      title: "Next-Gen Fitness with AI Precision",
      link: "https://github.com/saiimmani/Fitness-Tracker",
      thumbnail: "/fitness.png",
      bullets: [
        "Developed a Tkinter-based AI fitness tracker that securely manages user profiles, calculates BMI, and personalizes workout plans based on fitness goals.",
        "Integrated a Linear Regression model using Scikit-learn to predict daily calorie burn based on historical data.",
        "Features include secure user registration/login, expert health advice based on BMI, calorie logging, and profile update functionality.",
        "Tools used: Python, Tkinter, NumPy, Scikit-learn, JSON."
      ]
    },
    {
      title: "AI Study Buddy",
      link: "https://saiimmani-ai-study-buddy-app.streamlit.app/",
      bullets: [
        "Developed an AI-powered study companion to help students understand complex concepts and improve their learning experience.",
        "Features include concept explanation in simple terms, automatic summarization of study notes, and intelligent quiz/flashcard generation.",
        "Solves the problem of finding relevant educational resources and provides on-demand personalized learning support when teachers aren't available.",
        "Built with Streamlit for an intuitive user interface and integrated with advanced AI models for content generation and analysis.",
        "Tools used: Streamlit, Python, AI APIs, LLMs."
      ]
    }
  ],
  skills: {
    programming: ["C", "C++", "Java", "Python", "SQL", "JavaScript"],
    technologies: ["Git", "GitHub", "RESTful APIs", "Pandas", "NumPy", "PyTorch", "TensorFlow"],
    concepts: [
      "Machine Learning",
      "Deep Learning",
      "Data Analytics",
      "Natural Language Processing",
      "Database Management Systems",
      "Cloud Computing",
      "Embedded Systems",
      "Real-Time Problem Solving",
      "Object-Oriented Programming (OOP)"
    ],
    softSkills: ["Communication", "Team Collaboration", "Analytical Thinking", "Time Management", "Problem Solving"]
  },
  certifications: [
    {
      category: "Cloud & Infrastructure",
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D7368B5D6B7AEFB5B7AE78764E8803854A26D2FDBC151CDD4325E6E8B90C66D3"
    },
    {
      category: "Cloud & Infrastructure",
      title: "Oracle Fusion Cloud Applications ERP Process Essentials Certified – Rel 1",
      issuer: "Oracle",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B517A82290203EC3654055313DED770130A6189A58CFEDEAEFF71467A4518CDC"
    },
    {
      category: "Cloud & Infrastructure",
      title: "AWS Academy Graduate – Cloud Foundations",
      issuer: "AWS Academy",
      link: "https://www.credly.com/badges/207d3f4f-f542-4ce7-bc36-4b4e6cd3766e/linked_in_profile"
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      title: "5-Day AI Agents Intensive Course with Google & Kaggle",
      issuer: "Kaggle",
      link: "https://www.kaggle.com/certification/badges/saiimmani/105"
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      title: "Innovation Challenge Hackathon – Microsoft",
      issuer: "Microsoft",
      link: "https://www.credly.com/badges/91904b20-930d-4530-b7a1-d4a1edf32608/linked_in_profile"
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize",
      issuer: "Udemy",
      date: "Oct 2025"
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      title: "Mastering Generative AI: A Simple Guide for Beginners",
      issuer: "Udemy",
      date: "Sep 2025"
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      title: "AI Fundamentals with IBM SkillsBuild",
      issuer: "Cisco Networking Academy",
      link: "https://www.credly.com/badges/c8b33fcd-5eef-442c-8d31-a8d19892d72e"
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      title: "AI for All: From Basics to GenAI Practice",
      issuer: "NVIDIA",
      date: "Jun 2025"
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      title: "Artificial Intelligence Fundamentals Digital Badge",
      issuer: "IBM",
      date: "Jun 2025"
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      title: "Artificial Intelligence and Deep Learning Techniques",
      issuer: "Udemy",
      date: "Jan 2025"
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      title: "Introduction to Generative AI",
      issuer: "Infosys Springboard",
      date: "Dec 2024"
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      title: "Python for Data Science, AI & Development",
      issuer: "Coursera",
      link: "https://coursera.org/verify/L6KVF0OPGXBD"
    },
    {
      category: "Programming & Technical Skills",
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "Jun 2025"
    },
    {
      category: "Programming & Technical Skills",
      title: "Data Analysis with Python",
      issuer: "Cognitive Class",
      link: "https://www.bing.com/search?q=%22https%3A%2F%2Fcourses.cognitiveclass.ai%2Fcertificates%2F581f0b9a0a1b45c5a7db8f006e9a1d45%22"
    },
    {
      category: "Programming & Technical Skills",
      title: "SQL and Relational Databases 101",
      issuer: "Cognitive Class",
      link: "https://courses.cognitiveclass.ai/certificates/8672d083a84e4ff1bf27f24b02479a39"
    },
    {
      category: "Programming & Technical Skills",
      title: "Beginning C++ Programming – From Beginner to Beyond",
      issuer: "Udemy",
      date: "Mar 2024"
    },
    {
      category: "Programming & Technical Skills",
      title: "Python for Data Science",
      issuer: "Cognitive Class",
      link: "https://courses.cognitiveclass.ai/certificates/b066baf9077443fe847d7783130a3380"
    },
    {
      category: "Cybersecurity & Networking",
      title: "Networking Basics",
      issuer: "Cisco",
      link: "https://www.credly.com/badges/3f96952b-e531-46c7-9978-584ff0c821f7/linked_in_profile"
    },
    {
      category: "Cybersecurity & Networking",
      title: "Ethical Hacker",
      issuer: "Cisco Networking Academy",
      link: "https://www.credly.com/badges/e27bec98-dbf6-425a-951e-86f9d77d773e"
    },
    {
      category: "Hackathons & Achievements",
      title: "Adobe India Hackathon (Round 1 Participation)",
      issuer: "Unstop",
      link: "https://unstop.com/certificate-preview/71af4f9e-c66e-4447-b126-bbb7bd9d4f97"
    },
    {
      category: "Hackathons & Achievements",
      title: "Code Craft Chase – Team Centinels",
      issuer: "Code Craft",
      date: "Mar 2025"
    },
    {
      category: "Hackathons & Achievements",
      title: "DBMS Course",
      issuer: "Scaler",
      link: "https://moonshot.scaler.com/s/sl/rvASLfFl4u"
    }
  ],
  extracurricular: [
    { 
      title: "IEEE Computer Society Member", 
      organization: "SRMIST", 
      timeline: "Jan 2024 – Present",
      role: "Club Member",
      description: "Active member of IEEE Computer Society, participating in technical events, workshops, and networking opportunities to stay updated with industry trends.",
      duration: "Jan 2024 – Present"
    },
    { 
      title: "Discipline Committee Member", 
      organization: "Directorate of Student Affairs, SRMIST", 
      timeline: "Sep 2024 – May 2025",
      role: "Student Coordinator",
      description: "Promoted as a committee member, responsible for maintaining discipline during university events, coordinating with faculty, and mentoring junior volunteers.",
      duration: "Sep 2024 – May 2025"
    },
    { 
      title: "Discipline Committee Volunteer", 
      organization: "SRMIST", 
      timeline: "Aug 2023 – Sep 2024",
      role: "Student Volunteer",
      description: "Assisted in maintaining order during campus events, helped with crowd management, and supported senior committee members in event organization.",
      duration: "Aug 2023 – Sep 2024"
    },
    { 
      title: "National Service Scheme (NSS)", 
      organization: "SRMIST", 
      timeline: "Jan 2024 – May 2024",
      role: "Student Volunteer",
      description: "Participated in community service activities including cleanliness drives, awareness campaigns, and social outreach programs to give back to society.",
      duration: "Jan 2024 – May 2024"
    }
  ],
  lastUpdated: "July 2025"
};
