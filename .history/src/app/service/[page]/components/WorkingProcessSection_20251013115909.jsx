"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Animated Working Process Section
 * - uses an SVG path that draws itself
 * - step boxes placed with percentage top/left positions
 * - sequential animations (01 -> 02 -> 03 -> 04)
 *
 * Tailwind required. Framer Motion required.
 */

const processSteps = [
  { number: "01", title: "DISCOVERY & PLANNING", pos: { top: "6%", left: "50%" } },      // top-center
  { number: "02", title: "DESIGN & ARCHITECTURE", pos: { top: "36%", left: "10%" } },   // mid-left
  { number: "03", title: "DEPLOYMENT & TESTING", pos: { top: "36%", left: "90%" } },    // mid-right
  { number: "04", title: "POST-DEPLOYMENT SUPPORT & MAINTENANCE", pos: { top: "82%", left: "50%" } }, // bottom-center
];

export default function WorkingProcessSection() {
  // path points expressed as percentages in a 100x100 coordinate space.
  // They correspond to the step positions above.
  const pathD = `
    M50 10
    L12 36
    M50 10
    L88 36
    M12 36
    L50 86
    M88 36
    L50 86
  `;

  // animation timings for steps (staggered)
  const stepDelay = [0.15, 0.8, 1.4, 2.0];

  const StepBox = ({ step, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: stepDelay[index], ease: "easeOut" }}
      style={{
        position: "absolute",
        top: step.pos.top,
        left: step.pos.left,
        transform: "translate(-50%, -50%)",
        zIndex: 20,
      }}
    >
      <div className="flex items-center space-x-4 bg-white shadow-xl p-4 rounded-lg w-[min(360px,80vw)]">
        <div className="text-2xl font-extrabold p-3 rounded-md bg-gray-900 text-white min-w-[56px] flex items-center justify-center">
          {step.number}
        </div>
        <h4 className="text-base md:text-lg font-semibold text-gray-800 tracking-wide text-left">
          {step.title}
        </h4>
      </div>
    </motion.div>
  );

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-orange-500 mb-12"
        >
          WORKING PROCESS
        </motion.h2>

        {/* diagram box */}
        <div className="relative w-full" style={{ height: 520 }}>
          {/* SVG background with animated stroke */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: "none", overflow: "visible" }}
          >
            {/* subtle background path (light) */}
            <path
              d={pathD}
              stroke="#E5E7EB"
              strokeWidth={0.6}
              strokeDasharray="2 4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="scale(1,1)"
            />

            {/* animated bold path drawing (orange) */}
            <motion.path
              d={pathD}
              stroke="#F97316"
              strokeWidth={0.9}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1 0"
              // control drawing with strokeDashoffset, but because path has several subpaths (M commands),
              // use pathLength trick to animate the visible stroke drawing.
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
              style={{ filter: "drop-shadow(0 4px 8px rgba(249,115,22,0.12))" }}
            />

            {/* small animated circles at joints */}
            {[
              { cx: 50, cy: 10 },
              { cx: 12, cy: 36 },
              { cx: 88, cy: 36 },
              { cx: 50, cy: 86 },
            ].map((pt, i) => (
              <motion.circle
                key={i}
                cx={pt.cx}
                cy={pt.cy}
                r={1.4}
                fill="#F97316"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.35 }}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
              />
            ))}
          </svg>

          {/* decorative dotted circular frame */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0.2 }}
            whileInView={{ scale: 1, opacity: 0.35 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden
          >
            <div
              className="rounded-full"
              style={{
                width: "min(520px, 90%)",
                height: "min(520px, 90%)",
                borderRadius: "9999px",
                border: "2px dotted rgba(249,115,22,0.08)",
              }}
            />
          </motion.div>

          {/* Step boxes (render order ensures 1 then 2 then 3 then 4 visually appear sequentially) */}
          {processSteps.map((step, idx) => (
            <StepBox key={step.number} step={step} index={idx} />
          ))}

          {/* small floating accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.08, scale: 1.1, y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-8 w-28 h-28 rounded-full bg-orange-400"
            style={{ filter: "blur(28px)" }}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.06, scale: 1.05, y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-indigo-500"
            style={{ filter: "blur(30px)" }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
