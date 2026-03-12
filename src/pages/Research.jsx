import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Research() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#CDDACA]">
        <div className="max-w-4xl mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#243336] mb-6">
              Research
            </h1>
            <p className="text-lg text-[#243336] max-w-2xl mx-auto leading-relaxed mb-12">
              For information about my research, publications, and ongoing projects, please visit the CEDAR Lab website.
            </p>
            <a
              href="https://cedarlab.dartmouth.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A3C42] text-white rounded-lg text-base font-medium hover:bg-[#243336] transition-colors"
            >
              Visit CEDAR Lab
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}