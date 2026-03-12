import React from "react";
import { motion } from "framer-motion";

export default function TimelineItem({ item, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[11px] top-3 bottom-0 w-px bg-[#d4e4e0]" />
      )}
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-[#d4e4e0] bg-white flex items-center justify-center">
        <div className={`w-2.5 h-2.5 rounded-full ${item.current ? "bg-[#5b9bb5]" : "bg-[#d4e4e0]"}`} />
      </div>

      <div>
        <p className="text-xs font-medium text-[#5a7580]">{item.period}</p>
        <h4 className="mt-1 text-base font-semibold text-[#3a525c]">{item.title}</h4>
        <p className="text-sm text-[#49636e]">{item.company}</p>
        {item.location && <p className="text-xs text-[#5a7580] mt-0.5">{item.location}</p>}
        {item.description && (
          <p className="mt-2 text-sm text-[#49636e] leading-relaxed">{item.description}</p>
        )}
      </div>
    </motion.div>
  );
}