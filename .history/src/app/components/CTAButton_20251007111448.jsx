"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function CTAButton() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Bubble follows cursor inside button
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;
      x.set(offsetX / 6);
      y.set(offsetY / 6);
    };

    const button = document.getElementById("cta-btn");
    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", () => {
      x.set(0);
      y.set(0);
    });

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <motion.div
      className="relative w-48 h-48 mx-auto group cursor-pointer"
      id="cta-btn"
    >
      {/* Gradient Glow */}
      <motion.div
        style={{ x, y }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-30 blur-2xl group-hover:opacity-70 transition-all duration-700"
      />

      {/* Main Button */}
      <Link
        href="/portfolio"
        className="absolute w-full h-full rounded-full bg-black text-white flex flex-col items-center justify-center text-xl font-semibold transition-all duration-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 shadow-2xl overflow-hidden"
      >
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 relative z-10"
        >
          More Projects <ChevronRight size={24} />
        </motion.span>

        {/* Animated bubble */}
        <motion.div
          className="absolute bottom-5 right-8 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 shadow-md"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </Link>
    </motion.div>
  );
}
