import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FlaskConical, Target, Shield, Layers, Lightbulb } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";

const researchBranches = [
  {
    icon: Target,
    title: "Experimentation",
    description: "Theoretical design of optimal and efficient perturbations for system discovery.",
  },
  {
    icon: FlaskConical,
    title: "Detection",
    description: "Unmasking causal heterogeneity and obscured stories in mixture models.",
  },
  {
    icon: Shield,
    title: "AI Recourse",
    description: "Counterfactual frameworks for AI fairness, privacy, and model-sharing.",
  },
  {
    icon: Layers,
    title: "Synthesis",
    description: "Comparing and correcting for batch effects across disparate data sources.",
  },
  {
    icon: Lightbulb,
    title: "Fundamentals",
    description: "Establishing the universal limits of causal information recovery.",
  },
];

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

      {/* Research Branches */}
      <section className="bg-[#CDDACA] max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-[#243336] mb-2">Five Branches of CEDAR</h3>
          <p className="text-[#49636e]">Our research is organized into interconnected themes</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchBranches.map((branch, i) => (
            <motion.div
              key={branch.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 bg-white rounded-xl border border-[#d4e4e0] hover:border-[#4A6A7A] hover:shadow-lg transition-all"
            >
              <branch.icon className="w-6 h-6 text-[#4A6A7A] mb-3" />
              <h4 className="font-semibold text-[#243336] mb-2">{branch.title}</h4>
              <p className="text-sm text-[#49636e] leading-relaxed">{branch.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lab Link */}
      <section className="bg-[#CDDACA] border-t border-[#8FA49D]/30">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-[#d4e4e0] p-8 md:p-12 text-center"
          >
            <FlaskConical className="w-12 h-12 text-[#4A6A7A] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#243336] mb-3">The CEDAR Lab</h3>
            <p className="text-[#49636e] mb-6 max-w-2xl mx-auto">
              Causality for Experimentation, Detection, and AI Recourse
            </p>
            <p className="text-sm text-[#5a7580] mb-8 max-w-3xl mx-auto leading-relaxed">
              For complete information about our team, publications, news, and opportunities, visit the official CEDAR Lab website at Dartmouth Engineering.
            </p>
            <a
              href="https://cedarlab.dartmouth.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#B26450] text-white rounded-lg font-medium hover:bg-[#9d5644] transition-colors shadow-sm"
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