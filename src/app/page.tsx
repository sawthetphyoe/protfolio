"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";

import AvatarSVG from "@/components/icons/AvatarSVG";
import { Button } from "@/components/ui/button";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import MotionSection from "@/components/MotionSection";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import ThemeSwitch from "@/components/ThemeSwitcher";
import { education, navLinks, projects } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";

const techIcons = [
  { src: "/images/tech-icons/javascript.svg", text: "Javascript" },
  { src: "/images/tech-icons/typescript-icon-round.svg", text: "Typescript" },
  { src: "/images/tech-icons/react.svg", text: "React" },
  { src: "/images/tech-icons/nextjs-icon.svg", text: "Next.js" },
  { src: "/images/tech-icons/angular-icon.svg", text: "AngularJS" },
  { src: "/images/tech-icons/tailwindcss-icon.svg", text: "TailwindCSS" },
  { src: "/images/tech-icons/nodejs-icon.svg", text: "Node.js" },
  { src: "/images/tech-icons/mysql.svg", text: "MySQL" },
  { src: "/images/tech-icons/mongodb-icon.svg", text: "MongoDB" },
];

const TechIcon = ({
  src,
  text,
  isExpanded,
  onHover,
}: {
  src: string;
  text: string;
  isExpanded: boolean;
  onHover: () => void;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isExpanded) {
      controls.start({
        rotate: 360,
        transition: { duration: 3, ease: "linear", repeat: Infinity },
      });
    } else {
      controls.stop();
      controls.set({ rotate: 0 });
    }
  }, [isExpanded, controls]);

  return (
    <motion.div
      className="flex items-center bg-card rounded-full overflow-hidden cursor-pointer"
      initial={{ width: "40px" }}
      animate={{ width: isExpanded ? "auto" : "40px" }}
      transition={{ duration: 0.3 }}
      onMouseEnter={onHover}
    >
      <motion.div className="flex-shrink-0 w-10 h-10 p-1.5" animate={controls}>
        <Image
          src={src}
          alt={text}
          width={24}
          height={24}
          className="w-full h-full object-contain rounded-full"
          style={{ filter: "drop-shadow(2px 2px 4px #ffb4291a)" }}
        />
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.p
            className="pr-4 pl-2 text-sm font-semibold text-foreground whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-foreground">{text}</span>
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function TechIconList({
  icons,
  className,
}: {
  icons: { src: string; text: string }[];
  className?: string;
}) {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isHovered) {
      interval = setInterval(() => {
        setExpandedIndex((prevIndex) => {
          return (prevIndex + 1) % techIcons.length;
        });
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, techIcons.length]);

  const handleHover = (index: number) => {
    setIsHovered(true);
    setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={cn("flex flex-wrap gap-4 py-4", className)}
      onMouseLeave={handleMouseLeave}
    >
      {icons.map((icon, index) => (
        <TechIcon
          key={icon.text}
          src={icon.src}
          text={icon.text}
          isExpanded={index === expandedIndex}
          onHover={() => handleHover(index)}
        />
      ))}
    </div>
  );
}

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleElement = useRef(null);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScroll = useCallback(() => {
    const sections = ["home", "who-am-i", "projects", "contact"];
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 500 && rect.bottom >= 500;
      }
      return false;
    });

    if (currentSection) {
      document.querySelectorAll("nav button").forEach((button) => {
        button.classList.toggle(
          "text-primary",
          button.id === `nav-${currentSection}`
        );
      });
    }
  }, []);

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const typed = new Typed(titleElement.current, {
      strings: ["Software Engineer", "Frontend Engineer", "Web Developer"],
      typeSpeed: 75,
      backSpeed: 25,
      backDelay: 2000,
      showCursor: false,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground"
    >
      <header className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-xl">
        <nav className="container mx-auto px-4 py-4 relative">
          <ul className="flex justify-center md:space-x-4">
            {navLinks.map((section) => (
              <li key={section.key}>
                <Button
                  id={`nav-${section.key}`}
                  role="link"
                  aria-label={section.title}
                  aria-describedby={section.title}
                  variant="ghost"
                  className="font-medium"
                  onClick={() => handleNavClick(section.key)}
                >
                  {section.title}
                </Button>
              </li>
            ))}
          </ul>
          <ThemeSwitch className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2" />
        </nav>
      </header>

      <main className="pt-24">
        <MotionSection id="home" className="relative mb-28">
          <motion.div
            style={{ scale: useTransform(smoothProgress, [0, 0.5], [1, 0.8]) }}
          >
            <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-8">
              <div className="flex flex-col gap-5">
                <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold">
                  Saw Thet Phyoe
                </h1>
                <div className="h-8 text-2xl font-bold text-primary">
                  <span ref={titleElement} />
                </div>
                <p className="text-base leading-7 flex flex-col gap-1">
                  I am a software engineer with a passion for building scalable
                  and efficient software solutions. I have experience in
                  building web applications using React and Node.js. I am a
                  quick learner and I am always looking to learn new things.
                </p>
                <TechIconList icons={techIcons} />
              </div>
              <div className="hidden md:block">
                <AvatarSVG />
              </div>
            </div>
            <div className="translate-y-36">
              <IoArrowDownCircleOutline className="text-4xl absolute bottom-0 md:bottom-12 left-0 right-0 mx-auto animate-bounce" />
            </div>
          </motion.div>
        </MotionSection>

        <MotionSection id="who-am-i" className="bg-card bg-opacity-20">
          <motion.div
            style={{ scale: useTransform(smoothProgress, [0.5, 1], [1, 0.8]) }}
          >
            <div className="flex items-center w-full max-w-5xl mx-auto gap-8">
              <div className="w-1/2 hidden md:block">
                <Image
                  src={"/images/my_profile.png"}
                  alt="profile"
                  width={300}
                  height={300}
                  style={{
                    filter: "drop-shadow(2px 3px 9px #ffb4293a)",
                  }}
                />
              </div>
              <div className="flex flex-col gap-5 max-w-xl mx-auto">
                <SectionTitle title="Who am I?" />
                <p className="text-base leading-7">
                  With over 2 years of experience in the field of software
                  engineering, I have honed my skills in building scalable and
                  efficient software solutions.
                </p>
                <div className="flex flex-col gap-3">
                  <p>Here is my educational background.</p>
                  <div className="flex flex-col gap-6">
                    {education.map((edu) => (
                      <div key={edu.title} className="flex flex-col gap-1">
                        <p className="text-lg font-bold text-primary/80">
                          {edu.title}
                        </p>
                        <p className="flex gap-2 items-center flex-wrap">
                          <span className="font-bold">{edu.university}</span>
                          <span>|</span>
                          <span className="text-sm text-muted-foreground ">
                            {edu.year}
                          </span>
                        </p>
                        <ul className="flex flex-col gap-2 list-disc pl-5 text-sm">
                          {edu.grade && <li>{edu.grade}</li>}
                          <li>{edu.courses.join(", ")}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </MotionSection>

        <MotionSection id="projects" className="px-12 sm:px-36">
          <div className="flex flex-col gap-12 w-full max-w-5xl mx-auto items-center">
            <SectionTitle title="Featured Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: false, margin: "-100px" }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="contact" className="bg-card bg-opacity-20 py-32">
          <motion.div
            style={{ scale: useTransform(smoothProgress, [0.5, 1], [1, 0.8]) }}
          >
            <div className="flex flex-col gap-5 max-w-md items-center mx-auto">
              <SectionTitle title="Contact" />
              <p className="text-base leading-7 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, quibusdam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Perspiciatis, quibusdam.
              </p>
              <Link href="mailto:sawthetphyoe@gmail.com">
                <Button
                  role="link"
                  aria-label="Get in Touch"
                  aria-describedby="Get in Touch"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </MotionSection>

        <footer className="py-8">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Saw Thet Phyoe. All rights
            reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
