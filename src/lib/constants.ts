import { Education, Project } from "@/types";

export const navLinks = [
  {
    title: "Home",
    key: "home",
  },
  {
    title: "Who am I?",
    key: "who-am-i",
  },
  {
    title: "Projects",
    key: "projects",
  },
  {
    title: "Contact",
    key: "contact",
  },
];

export const education: Education[] = [
  {
    title: "B.Sc. (Hons) in Computing",
    university: "University of Greenwich",
    year: "2023 - 2024",
    grade: "Graduated with First Class Honours",
    courses: ["Web Technology", "Requirement Management", "Computing Project"],
  },
  {
    title: "Level 5 Diploma in Computing",
    university: "NCC Education(UK)",
    year: "2022 - 2023",
    grade: "Global High Achiever (3rd in the world)",
    courses: [
      "Agile Methodologies",
      "Network Security & Cryptography",
      "Database Management",
    ],
  },
  {
    title: "B.E. in Electronic Engineering",
    university: "Yangon Technological University",
    year: "2015 - 2020",
    courses: [
      "Computer Architecture",
      "Engineering Mathematics",
      "Engineering Management",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "c4code",
    description: "This is a project that I built using React and Node.js",
    images: [
      "https://images.unsplash.com/photo-1726853522009-8dc4c4e306a3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682125196952-a37ba95ee650?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    technologies: ["React", "Express.js", "MUI"],
    github: "https://github.com/sawthetphyoe/c4code",
  },
  {
    title: "iconic admin",
    description: "This is a project that I built using React and Node.js",
    images: [
      "https://images.unsplash.com/photo-1726853522009-8dc4c4e306a3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682125196952-a37ba95ee650?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    technologies: ["Next.js", "Next.js", "TailwindCSS", "DaisyUI"],
    github: "https://github.com/sawthetphyoe/iconic-admin",
    demo: "https://google.com",
  },

  {
    title: "iconic server",
    description: "This is a project that I built using React and Node.js",
    images: [
      "https://images.unsplash.com/photo-1726853522009-8dc4c4e306a3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682125196952-a37ba95ee650?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    technologies: ["Next.js", "Node.js", "Next.js", "MongoDB"],
    github: "https://github.com/sawthetphyoe/iconic-admin",
  },
];
