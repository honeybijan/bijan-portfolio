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
      className="group py-5 border-b border-stone-100 last:border-0"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-stone-900 leading-snug">{pub.title}</h4>
          <p className="mt-1 text-xs text-stone-500">{pub.authors}</p>
          <p className="mt-1 text-xs text-stone-400 italic">{pub.venue}</p>
        </div>
        {pub.url && (
          <a
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-2 rounded-md text-stone-300 hover:text-amber-700 hover:bg-amber-50 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}