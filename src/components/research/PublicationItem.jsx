import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function PublicationItem({ pub, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group py-5 border-b border-[#e8f3ef] last:border-0"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-[#3a525c] leading-snug">{pub.title}</h4>
          <p className="mt-1 text-xs text-[#49636e]">{pub.authors}</p>
          <p className="mt-1 text-xs text-[#5a7580] italic">{pub.venue}</p>
        </div>
        {pub.url && (
          <a
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-2 rounded-md text-[#d4e4e0] hover:text-[#5b9bb5] hover:bg-[#e8f3ef] transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}