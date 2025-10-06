"use client"
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-3 h-3 bg-red-500 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-linear"
      style={{
        transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
      }}
    ></div>
  );
}
