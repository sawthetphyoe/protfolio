import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GoPlay } from "react-icons/go";
import { Button } from "./ui/button";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div>
      <div className="w-full h-40 overflow-hidden cursor-zoom-in">
        <Image
          className="w-full h-full object-cover hover:scale-110 transition-all duration-500 rounded-t-sm"
          src={project.images[0]}
          alt={project.title}
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between h-9">
          <h3 className="text-base font-semibold text-primary">
            {project.title}
          </h3>
          <div className="flex items-center gap-4">
            {project.github && (
              <Link href={project.github} target="_blank">
                <Button
                  variant="link"
                  className="p-0 hover:scale-125 transition-all duration-300 !text-primary-foreground hover:!text-primary hover:-rotate-12 "
                >
                  <FaGithub className="w-5 h-5 " />
                </Button>
              </Link>
            )}
            {project.demo && (
              <Link href={project.demo} target="_blank">
                <Button
                  variant="link"
                  className="p-0 hover:scale-125 transition-all duration-300 !text-primary-foreground hover:!text-primary hover:-rotate-12"
                >
                  <GoPlay className="w-5 h-5 " />
                </Button>
              </Link>
            )}
          </div>
        </div>
        <p className="text-sm text-primary-foreground ">
          {project.description}
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {project.technologies.map((technology) => (
            <span
              key={technology + project.title}
              className="text-xs bg-primary/10 px-2.5 py-1.5 rounded-md"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
