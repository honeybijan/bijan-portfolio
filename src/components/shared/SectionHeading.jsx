import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#243336]">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[#243336] max-w-3xl leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}