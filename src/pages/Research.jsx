import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Research() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#c1dfd1]">
        <div className="max-w-4xl mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#3a525c] mb-6">
              Research
            </h1>
            <p className="text-lg text-[#49636e] max-w-2xl mx-auto leading-relaxed mb-12">
              For information about my research, publications, and ongoing projects, please visit the CEDAR Lab website.
            </p>
            <a
              href="https://cedarlab.dartmouth.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#49636e] text-white rounded-lg text-base font-medium hover:bg-[#3a525c] transition-colors"
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