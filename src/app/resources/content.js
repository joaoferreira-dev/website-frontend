const person = {
    firstName: "João",
    lastName: "Ferreira",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "Full Stack Developer",
    avatar: "/images/avatar.jpg",
    email: "joaosilvaferreira.dev@gmail.com",
    location: "New Zealand",
    timezone: "Pacific/Auckland",
    languages: ["English", "Portuguese"]
};

const social = [
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/joao-ferreira-developer/",
    },
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/kiwizera",
    },
    {
        name: "Email",
        icon: "email",
        link: `mailto:${person.email}`,
    },
]

const home = {
    path: "/",
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: "Welcome to my brand new portfolio",
    subheadline: "I'm João Ferreira, a Full Stack Developer passionate about building scalable and user-friendly web applications",
    slider: [
        {
            imageURL: "/images/home.png",
            title: "Building scalable and optimized web-applications"
        }
    ]
}

const about = {
    path: "/about",
    label: "About",
    title: "About Me",
    description: "Full Stack Developer with 3+ years of experience building scalable web apps and cloud infrastructure using Python, JavaScript, and AWS. Skilled in automation and system optimization, with a track record of improving deployment and performance. Collaborative and solution-focused, seeking remote or sponsorship-based roles in global tech teams.",
    workExperience: [
        {
            company: "IBM",
            position: "Programming Analyst",
            startYear: "2024",
            endYear: "2025",
            description: [
                "Provisioned AWS infrastructure using Terraform and Python, reducing deployment time by 30% and increasing system reliability.",
                "Collaborated with DevOps and backend teams to automate infrastructure as code pipelines, improving overall delivery efficiency."
            ]
        },
        {
            company: "EF/DESIGN",
            position: "Full Stack Developer",
            startYear: "2022",
            endYear: "2024",
            description: [
                "Developed responsive apps with Django, Next.js, and PostgreSQL, improving page speed by 50%.",
                "Designed scalable AWS architectures, cutting costs by 20%.",
                "Integrated REST APIs with frontend components to enhance UX."
            ]
        }
    ],
    technicalSkills: ["Python", "JavaScript", "TypeScript", "SQL", "React", "Next.js", "Django", "TailwindCSS", "AWS", "Docker", "Terraform", "Git", "GitHub", "Node.js", "REST APIs", "CI/CD", "Microservices", "Agile/Scrum", "Problem Solving", "System design"],
    sidebar: [
        {
            title: "Introduction",
            anchor: "introduction",
        },
        {
            title: "Work Experience",
            anchor: "work-experience",
        },
        {
            title: "Technical Skills",
            anchor: "technical-skills",
        },
    ]
}

export {person, social, home, about};