const person = {
    firstName: "João",
    lastName: "Ferreira",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "Full Stack Software Developer",
    avatar: "/images/avatar.jpg",
    email: "joaosilvaferreira.dev@gmail.com",
    location: "New Zealand",
    timezone: "Pacific/Auckland",
    languages: ["English"]
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
    headline: "Welcome to my portfolio",
    subheadline: "I'm João Ferreira, a Full Stack Software Developer",
}

export {person, social, home};