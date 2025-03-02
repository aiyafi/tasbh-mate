"use client";

import { useState, useEffect } from "react";
import NumberFlow, { continuous } from '@number-flow/react';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/DockFunc";

export default function HomePage() {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState<number | null>(null);

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

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar with Decrement, Reset, and Goal buttons */}
      <div className="p-4 flex justify-between items-center">
        <div>
          <Button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>
            Decrement
          </Button>

        </div>
        <div>
          <Button
            variant="outline"
            onClick={() => setCount(0)}
            className="ml-2">
            Reset
          </Button>
        </div>
      </div>

      {/* Full-screen tappable area */}
      <div
        className="flex-1 flex justify-center items-center select-none"
        onClick={handleFullScreenClick}
        // Prevents mobile double-tap zoom
        style={{ touchAction: "manipulation" }}
      >
        <div className="lg:text-9xl text-8xl font-bold">
          <NumberFlow
            plugins={[continuous]}
            value={count}
          />
        </div>
      </div>
      <ModeToggle />
    </div>
  );
}