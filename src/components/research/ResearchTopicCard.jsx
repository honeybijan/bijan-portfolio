import React from "react";
import { motion } from "framer-motion";

export default function ResearchTopicCard({ topic, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative p-6 md:p-8 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/60 transition-all duration-300"
    >
      <div className="absolute top-6 right-6 text-5xl font-bold text-slate-100 group-hover:text-cyan-100/60 transition-colors">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="text-lg font-bold text-slate-900 pr-12">{topic.title}</h3>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{topic.summary}</p>
    </motion.div>
  );
}