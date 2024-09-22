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
    title: "B.Eng. in Electrical Engineering",
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
    title: "E-wallet admin dashboard",
    description:
      "Unified admin dashboard for a local bank, managing e-wallet apps for consumers, agents, super agents, and merchants.",
    images: [
      "https://images.unsplash.com/photo-1726853522009-8dc4c4e306a3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682125196952-a37ba95ee650?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    technologies: ["Next.js", "TailwindCSS", "Ant Design"],
  },
  {
    title: "iCONIC admin",
    description:
      "Admin panel for managing e-commerce products, branches, orders, deliveries, and inventory",
    images: [
      "https://images.unsplash.com/photo-1726853522009-8dc4c4e306a3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682125196952-a37ba95ee650?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    technologies: ["Next.js", "TailwindCSS", "DaisyUI"],
    github: "https://github.com/sawthetphyoe/iconic-admin",
    demo: "https://google.com",
  },

  {
    title: "iCONIC server",
    description:
      "Backend server for iconic apps, providing APIs for the admin dashboard and consumer platform.",
    images: [
      "https://images.unsplash.com/photo-1726853522009-8dc4c4e306a3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682125196952-a37ba95ee650?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    technologies: ["Node.js", "Nest.js", "MongoDB"],
    github: "https://github.com/sawthetphyoe/iconic-be",
  },
  {
    title: "c4code",
    description:
      "An e-learning platform for managing courses, students, tutors, and enrollments with admin and student panels.",
    images: [
      "https://images.unsplash.com/photo-1726853522009-8dc4c4e306a3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682125196952-a37ba95ee650?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    technologies: ["React", "RTK Query", "Express.js", "MUI", "MongoDB"],
    github: "https://github.com/sawthetphyoe/c4code",
  },
];
