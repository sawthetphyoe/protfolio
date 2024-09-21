"use client";

import { useCallback, useEffect, useRef } from "react";
import { BsDownload } from "react-icons/bs";
import { IoArrowDownCircleOutline } from "react-icons/io5";

import AvatarSVG from "@/components/AvatarSVG";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import MotionSection from "@/components/MotionSection";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { education, navLinks, projects } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";

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
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center md:space-x-4">
            {navLinks.map((section) => (
              <li key={section.key}>
                <Button
                  id={`nav-${section.key}`}
                  variant="ghost"
                  className="font-medium"
                  onClick={() => handleNavClick(section.key)}
                >
                  {section.title}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-24">
        <MotionSection id="home">
          <motion.div
            style={{ scale: useTransform(smoothProgress, [0, 0.5], [1, 0.8]) }}
            className="relative"
          >
            <div className="flex justify-between items-center flex-col-reverse md:flex-row">
              <div className="flex flex-col gap-5 md:pr-24">
                <p className="text-base font-bold text-primary">
                  Hi, my name is
                </p>
                <h1 className="text-4xl md:text-7xl font-bold">
                  Saw Thet Phyoe
                </h1>
                <div className="h-8 text-2xl font-bold text-primary">
                  <span ref={titleElement} />
                </div>
                <p className="text-base leading-7 flex flex-col gap-1">
                  <span>
                    I am a software engineer with a passion for building
                    scalable and efficient software solutions.
                  </span>
                  <span>
                    I have experience in building web applications using React
                    and Node.js. I am a quick learner and I am always looking to
                    learn new things.
                  </span>
                </p>
                <Button className="self-start font-bold bg-primary/90">
                  Download Resume
                  <BsDownload className="ml-2" />
                </Button>
              </div>
              <div className="hidden md:block">
                <AvatarSVG />
              </div>
            </div>
            <div className="translate-y-28">
              <IoArrowDownCircleOutline className="text-4xl absolute bottom-0 md:bottom-12 left-0 right-0 mx-auto animate-bounce" />
            </div>
          </motion.div>
        </MotionSection>

        <MotionSection id="who-am-i" className="bg-stone-900 bg-opacity-20">
          <motion.div
            style={{ scale: useTransform(smoothProgress, [0.5, 1], [1, 0.8]) }}
          >
            <div className="flex items-center w-full max-w-5xl mx-auto">
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
                      <div key={edu.title} className="flex flex-col gap-2">
                        <p className="text-lg font-bold text-primary/80">
                          {edu.title}
                        </p>
                        <p className="flex gap-2">
                          <span className="font-bold">{edu.university}</span>
                          <span>|</span>
                          <span>{edu.year}</span>
                        </p>
                        <ul className="flex flex-col gap-2 list-disc pl-5">
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

        <MotionSection id="projects">
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

        <MotionSection
          id="contact"
          className="bg-stone-900 bg-opacity-20 py-32"
        >
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
                <Button>Get in Touch</Button>
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
