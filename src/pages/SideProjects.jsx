import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";

export default function SideProjects() {
  return (
    <div>
      <section className="bg-gradient-to-b from-blue-50/30 to-white border-b border-slate-100">
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
          className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-cyan-100 text-cyan-800 text-xs font-medium rounded-full mb-3">
                  Sports Analytics
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">LACCTiC</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Leveling Across Courses and Conditions by Time Comparison
                </p>
              </div>
              <a
                href="https://www.lacctic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-3 rounded-lg border border-slate-200 text-slate-400 hover:text-cyan-700 hover:border-cyan-200 hover:bg-cyan-50 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <p className="mt-6 text-slate-600 leading-relaxed max-w-3xl">
              A website I developed in 2021 to convert cross country performances from varying course difficulties to their track 5k equivalents. The results are used to provide sophisticated rankings and race simulations. Used by coaches and athletes across the NCAA.
            </p>

            <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h4 className="font-semibold text-slate-900 text-sm mb-3">How it works</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                LACCTiC looks at how finish times change across different courses. The average across many runners gives an idea of relative course difficulty. Using an expectation-maximization approach, the algorithm alternates between estimating runner fitness levels and course adjustments until convergence, then calibrates adjusted cross country PRs to align with track PRs.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Django", "Python", "AWS", "Statistics", "Cross Country"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
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