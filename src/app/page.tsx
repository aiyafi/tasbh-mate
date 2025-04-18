"use client";

import { useState, useEffect } from "react";
import NumberFlow, { continuous } from '@number-flow/react';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/DockFunc";
import { Particles } from "@/components/magicui/particles";
import { useTheme as useNextTheme } from "next-themes";
import { motion } from 'motion/react';
import { Minus, RotateCcw } from 'lucide-react';

export default function HomePage() {
  const [count, setCount] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const savedCount = localStorage.getItem('tasbhCount');
      return savedCount ? parseInt(savedCount, 10) : 0;
    }
    return 0;
  });

  // localStorage
  useEffect(() => {
    localStorage.setItem('tasbhCount', count.toString());
  }, [count]);

  // Handle keyboard shortcuts: Spacebar to increment, Ctrl+Spacebar to decrement, "R" to reset.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Spacebar increment
      if (event.code === "Space" && !event.ctrlKey) {
        event.preventDefault();
        setCount((prev) => prev + 1);
      }
      // "-": decrement
      if (event.code === "Minus") {
        event.preventDefault();
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
      }
      // Alt + "R": reset
      if (event.code === "KeyR" && event.altKey) {
        event.preventDefault();
        setCount(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // When the full-screen area is clicked/tapped, increment the count.
  const handleFullScreenClick = () => {
    setCount((prev) => prev + 1);
  };

  // Custom hook to get the current theme and toggle between light and dark.
  function useTheme() {
    const { resolvedTheme, theme, setTheme } = useNextTheme();
    return { resolvedTheme, theme, setTheme };
  }

  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-4 flex justify-between items-center">
        {/* Button with text or icons based on screen size */}
        <div>
          <Button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>
            <span className="hidden sm:inline">Minus</span>
            <span className="sm:hidden">
              <Minus size={24} />
            </span>
          </Button>
        </div>
        <div>
          <Button
            className="ml-2 bg-background/80 backdrop-blur-md"
            variant="outline"
            onClick={() => setCount(0)}
          >
            <span className="hidden sm:inline">Reset</span>
            <span className="sm:hidden">
              <RotateCcw size={24} />
            </span>
          </Button>
        </div>
      </div>

      <div
        className="flex-1 flex justify-center items-center select-none"
        onClick={handleFullScreenClick}
        // Prevents mobile double-tap zoom
        style={{ touchAction: "manipulation" }}
      >
        <div className="lg:text-9xl text-8xl font-bold">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <NumberFlow
              plugins={[continuous]}
              value={count}
            />
          </motion.div>
          <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            color={color}
            refresh
          />
        </div>
      </div>
      <ModeToggle />
    </div>
  );
}