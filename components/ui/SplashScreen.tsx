"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Welcome",
  "স্বাগতম",
  "Bienvenido",
  "Bienvenue",
  "Benvenuto",
  "أهلاً بك",
  "ようこそ",
  "欢迎",
];

export function SplashScreen() {
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Defer state updates to avoid synchronous setState cascading render warnings
    const initTimer = setTimeout(() => {
      setIsMounted(true);
      // Check if we've already shown the splash screen in this session
      if (sessionStorage.getItem("falahsys_splash_seen")) {
        setShow(false);
      }
    }, 0);
    return () => clearTimeout(initTimer);
  }, []);

  useEffect(() => {
    // If the splash screen is not showing or not mounted, don't run any timers
    if (!show || !isMounted) return;

    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 250); // Speed of language change
      return () => clearTimeout(timer);
    } else {
      // After array finishes
      const timer = setTimeout(() => {
        sessionStorage.setItem("falahsys_splash_seen", "true");
        setShow(false);
      }, 500); // Wait a half second on the last word
      return () => clearTimeout(timer);
    }
  }, [index, show, isMounted]);

  // Avoid hydration mismatch by not rendering anything on the server
  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070B18]"
        >
          <div className="flex items-center gap-3 text-white text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <motion.h1
              key={index} // Force re-render/animation on index change
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {greetings[index]}
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
