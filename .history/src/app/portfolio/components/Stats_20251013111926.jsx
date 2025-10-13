"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const statsData = [
  { value: 30, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "On-Time Delivery" },
  { value: 150, suffix: "%", label: "Avg. ROI Increase" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

const CountUp = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = 20; // ms
    const step = (end / (duration * 1000 / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}</>;
};

export default function StatsSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Project <span className="text-orange-500">Results</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real metrics from our successful projects that demonstrate our
            commitment to delivering measurable results.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">
                <CountUp target={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-gray-700 font-medium text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
