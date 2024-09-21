export type Project = {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github?: string;
  demo?: string;
};

export type Education = {
  title: string;
  university: string;
  year: string;
  grade?: string;
  courses: string[];
};
