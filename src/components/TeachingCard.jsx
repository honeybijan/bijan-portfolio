import React from "react";
import { motion } from "framer-motion";

const TeachingCard = ({ course, index = 0 }) => {
  const { number, title, institution, years, description, downloads } = course;
  const hasDownloads = downloads?.notes || downloads?.homeworks;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-[#f8faf9] border border-[#d4e4e0] rounded-xl p-6 md:p-8 space-y-4 hover:border-[#5b9bb5] hover:shadow-lg hover:shadow-[#5b9bb5]/20 transition-all duration-300"
    >
      <div className="space-y-1">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-mono text-[#B26450]">{number}</span>
          <h2 className="text-lg font-bold text-[#3a525c]">{title}</h2>
        </div>
        <div className="flex items-center gap-3 text-sm text-[#49636e]">
          <span>{institution}</span>
          <span className="text-[#B26450]">·</span>
          <span>{years.join(" · ")}</span>
        </div>
      </div>
      <p className="text-sm text-[#49636e] leading-relaxed">{description}</p>
      {hasDownloads && (
        <div className="flex gap-3 pt-1">
          {downloads.notes && (
            <a href={downloads.notes} download className="text-sm px-3 py-1.5 rounded-md border border-[#B26450] text-[#B26450] hover:bg-[#B26450] hover:text-white transition-colors">
              Course Notes
            </a>
          )}
          {downloads.homeworks && (
            <a href={downloads.homeworks} download className="text-sm px-3 py-1.5 rounded-md border border-[#B26450] text-[#B26450] hover:bg-[#B26450] hover:text-white transition-colors">
              Homeworks
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default TeachingCard;