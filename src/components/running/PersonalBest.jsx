import React from "react";
import { motion } from "framer-motion";

export default function PersonalBest({ event, time, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="flex items-baseline justify-between py-3 border-b border-[#e8f3ef] last:border-0"
    >
      <span className="text-sm font-medium text-[#243336]">{event}</span>
      <span className="text-sm font-mono text-[#4A6A7A]">{time}</span>
    </motion.div>
  );
}