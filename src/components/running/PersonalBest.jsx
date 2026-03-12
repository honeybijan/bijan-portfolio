import React from "react";
import { motion } from "framer-motion";

export default function PersonalBest({ event, time, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="flex items-baseline justify-between py-3 border-b border-stone-100 last:border-0"
    >
      <span className="text-sm font-medium text-stone-900">{event}</span>
      <span className="text-sm font-mono text-amber-700">{time}</span>
    </motion.div>
  );
}