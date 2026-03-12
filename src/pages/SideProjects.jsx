import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";

export default function SideProjects() {
  return (
    <div>
      <section className="bg-[#d4ebe4] border-b border-[#d4e4e0]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <SectionHeading title="Side Projects" subtitle="Things I build outside of my core research." />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-[#d4e4e0] overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-[#d4ebe4] text-[#49636e] text-xs font-medium rounded-full mb-3">
                  Sports Analytics
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3a525c]">LACCTiC</h3>
                <p className="mt-1 text-sm text-[#5a7580]">
                  Leveling Across Courses and Conditions by Time Comparison
                </p>
              </div>
              <a
                href="https://www.lacctic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-3 rounded-lg border border-[#d4e4e0] text-[#5a7580] hover:text-[#5b9bb5] hover:border-[#5b9bb5] hover:bg-[#e8f3ef] transition-all"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <p className="mt-6 text-[#49636e] leading-relaxed max-w-3xl">
              A website I developed in 2021 to convert cross country performances from varying course difficulties to their track 5k equivalents. The results are used to provide sophisticated rankings and race simulations. Used by coaches and athletes across the NCAA.
            </p>

            <div className="mt-8 bg-[#e8f3ef] rounded-xl p-6 border border-[#d4e4e0]">
              <h4 className="font-semibold text-[#3a525c] text-sm mb-3">How it works</h4>
              <p className="text-sm text-[#49636e] leading-relaxed">
                LACCTiC looks at how finish times change across different courses. The average across many runners gives an idea of relative course difficulty. Using an expectation-maximization approach, the algorithm alternates between estimating runner fitness levels and course adjustments until convergence, then calibrates adjusted cross country PRs to align with track PRs.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Django", "Python", "AWS", "Statistics", "Cross Country"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/60 text-[#49636e] text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}