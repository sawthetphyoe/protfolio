"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch({ className }: { className?: string }) {
  const theme = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const toggleTheme = () => {
    theme.setTheme(theme.theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <button
        onClick={toggleTheme}
        className={cn(
          "w-[52px] h-[30px] rounded-full p-1 transition-colors duration-500 ease-in bg-foreground",
          className
        )}
        role="switch"
        aria-checked={theme.theme === "dark"}
        aria-pressed={theme.theme === "dark"}
        aria-label={
          theme.theme === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"
        }
      >
        <motion.div
          className="absolute left-1 top-[3px] size-6 rounded-full bg-background flex items-center justify-center"
          animate={{ x: theme.theme === "dark" ? 22 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {theme.theme === "dark" ? (
            <Moon className="size-4 text-foreground" />
          ) : (
            <Sun className="size-4 text-primary" />
          )}
        </motion.div>
        <span className="sr-only">
          {theme.theme === "dark" ? "Dark mode" : "Light mode"}
        </span>
      </button>
    )
  );
}
