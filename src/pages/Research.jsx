import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";

export default function Research() {
  return (
    <div>
      <section className="bg-[#CDDACA] border-b border-[#8FA49D]/30">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <SectionHeading
            title="Research"
            subtitle="Our lab investigates the information-theoretic limits of causal relationships and how they are stored within modern AI architectures. By bridging theoretical computer science and causal inference, we study how to design optimal experiments, detect hidden structure in heterogeneous populations, and build tools for algorithmic fairness and reproducibility."
          />
        </div>
      </section>

      {/* Lab Link */}
      <section className="bg-[#CDDACA]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#1a2625] to-[#0f1b1a] rounded-2xl border border-[#2a3f3d] p-8 md:p-12 text-center"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b2aceda872b69be2b6d807/dba1ecffa_CEDAR_3_color.png" 
              alt="CEDAR Lab Logo" 
              className="w-32 h-32 mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-3">The CEDAR Lab</h3>
            <p className="text-[#5ECFAE] mb-6 max-w-2xl mx-auto">
              Causality for Experimentation, Detection, and AI Recourse
            </p>
            <p className="text-sm text-[#b5c5c1] mb-8 max-w-3xl mx-auto leading-relaxed">
              For complete information about our team, publications, news, and opportunities, visit the official CEDAR Lab website at Dartmouth Engineering.
            </p>
            <a
              href="https://cedarlab.dartmouth.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#5ECFAE] text-[#0f1b1a] rounded-lg font-medium hover:bg-[#4dbf96] transition-colors shadow-sm"
            >
              Visit CEDAR Lab Website
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}