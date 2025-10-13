"use client";

import { motion } from "framer-motion";

const processSteps = [
  { number: "01", title: "DISCOVERY & PLANNING", position: "top-left" },
  { number: "02", title: "DESIGN & ARCHITECTURE", position: "mid-left" },
  { number: "03", title: "DEPLOYMENT & TESTING", position: "mid-right" },
  { number: "04", title: "POST-DEPLOYMENT SUPPORT & MAINTENANCE", position: "bottom-center" },
];

export default function WorkingProcessSection() {
  const StepBox = ({ step, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="flex items-center space-x-4 bg-white shadow-xl p-5 rounded-2xl border border-gray-200 w-fit"
    >
      <div className="text-2xl font-extrabold p-3 rounded-lg bg-gray-900 text-white">
        {step.number}
      </div>
      <h4 className="text-xl font-semibold text-gray-800 tracking-wider max-w-xs text-left">
        {step.title}
      </h4>
    </motion.div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-extrabold text-orange-500 mb-16"
        >
          WORKING PROCESS
        </motion.h2>

        {/* Diagram Container */}
        <div className="relative h-[650px] md:h-[800px] flex items-center justify-center">

          {/* Dotted Path Lines */}
          <div className="absolute border-l-4 border-dotted border-gray-300 h-[150px] left-1/2 top-[10%] transform -translate-x-1/2"></div>
          <div className="absolute border-t-4 border-dotted border-gray-300 w-[50%] left-1/4 top-[35%]"></div>
          <div className="absolute border-l-4 border-dotted border-gray-300 h-[150px] right-1/4 top-[35%]"></div>
          <div className="absolute border-t-4 border-dotted border-gray-300 w-[40%] left-[30%] bottom-[20%]"></div>

          {/* Step 1 */}
          <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2">
            <StepBox step={processSteps[0]} delay={0.2} />
          </div>

          {/* Step 2 */}
          <div className="absolute top-[30%] left-[10%]">
            <StepBox step={processSteps[1]} delay={0.8} />
          </div>

          {/* Step 3 */}
          <div className="absolute top-[35%] right-[10%]">
            <StepBox step={processSteps[2]} delay={1.4} />
          </div>

          {/* Step 4 */}
          <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2">
            <StepBox step={processSteps[3]} delay={2.0} />
          </div>
        </div>

        {/* Background Decorative Circle */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border-2 border-dotted border-orange-300 opacity-40"></div>
        </motion.div>
      </div>
    </section>
  );
}
