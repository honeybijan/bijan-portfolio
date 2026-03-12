import React from "react";
import { motion } from "framer-motion";

export default function ResearchTopicCard({ topic, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative p-6 md:p-8 bg-white rounded-xl border border-stone-200 hover:border-stone-300 hover:shadow-lg hover:shadow-stone-100/80 transition-all duration-300"
    >
      <div className="absolute top-6 right-6 text-5xl font-bold text-stone-100 group-hover:text-amber-100/60 transition-colors">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="text-lg font-bold text-stone-900 pr-12">{topic.title}</h3>
      <p className="mt-3 text-sm text-stone-500 leading-relaxed">{topic.summary}</p>
    </motion.div>
  );
}