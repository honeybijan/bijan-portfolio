import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Download, ArrowRight, Copy, Check } from "lucide-react";
import PageMeta from "../components/shared/PageMeta";

// ── EDIT ME ─────────────────────────────────────────────────────────
// 1. Put your PDF at:  public/notes/principles-of-causality.pdf
// 2. Update the chapter list and citation below to match your notes.
const PDF_URL = "/Principles_of_Causality_Textbook.pdf";

const chapters = [
  { num: "01", title: "The History and Philosophy of Causality", desc: "What is a cause? Can we learn causality — and how?" },
  { num: "02", title: "Foundations of Causality", desc: "Simpson's paradox, causal diagrams, counterfactuals, Pearl's ladder, potential outcomes, and randomized controlled trials." },
  { num: "03", title: "Structural Causal Models", desc: "Bayesian networks, d-separation, backdoor and frontdoor adjustment, SWIGs, unobserved confounding, and causal calculus." },
  { num: "04", title: "Estimating Causal Effects", desc: "Outcome regression, inverse propensity weighting, doubly robust estimation, causal ML, synthetic controls, and instrumental variables." },
  { num: "05", title: "Causal Discovery", desc: "Skeleton discovery, equivalence classes, GES, interventional discovery, ICA, LiNGAMs, and modern approaches." },
  { num: "06", title: "Reflections and Future Directions", desc: "Where causal inference is headed and the open problems that remain." },
];

const bibtex = `@book{mazaheri2026causality,
  author    = {Mazaheri, Bijan},
  title     = {Principles of Causality},
  year      = {2026},
  publisher = {Lecture notes, Thayer School of Engineering, Dartmouth College},
  url       = {https://bijanmazaheri.com/Textbook}
}`;
// ────────────────────────────────────────────────────────────────────

export default function Textbook() {
  const [copied, setCopied] = useState(false);

  const copyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. non-HTTPS) — fall back to selecting nothing;
      // the text is still visible for manual copy.
    }
  };

  return (
    <div className="bg-[#CDDACA] min-h-screen">
      <PageMeta
        title="Principles of Causality — Free Causal Inference Textbook | Bijan Mazaheri"
        description="A free 149-page textbook on causal inference for scientists and engineers: randomized controlled trials, structural causal models, effect estimation, and causal discovery. Read online or download the PDF."
      />
      {/* Hero */}
      <section className="border-b border-[#8FA49D]/30">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-[auto,1fr] gap-12 md:gap-16 items-center">
            {/* Typographic book cover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center md:justify-start"
            >
              <div className="w-56 md:w-64 aspect-[3/4] bg-[#243336] rounded-lg border-4 border-[#B26450] shadow-2xl shadow-[#49636e]/30 p-6 flex flex-col justify-between">
                <div>
                  <div className="h-1 w-10 bg-[#B26450] rounded-full mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#E8DFD0] leading-tight">
                    Principles of Causality
                  </h2>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-[#CDDACA]">Bijan Mazaheri</p>
                  <p className="text-xs text-[#8FA49D]">Free PDF · 152 pages</p>
                </div>
              </div>
            </motion.div>

            {/* Pitch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#243336]">
                Principles of Causality
              </h1>
              <p className="mt-3 text-lg text-[#243336] font-medium">
                A free, self-contained introduction to causal inference for scientists and engineers.
              </p>
              <p className="mt-5 text-[#243336] leading-relaxed max-w-xl">
                Helmets increase head injuries. Faster drivers arrive later. Causal
                relationships can be lost in a labyrinth of correlation — these notes
                establish the principles for answering true causal questions, from
                randomized controlled trials and structural causal models to estimation
                and causal discovery. Developed for ENGS 105.1 at Dartmouth, written for anyone.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B26450] text-white rounded-full text-sm font-medium hover:bg-[#9d5644] transition-colors shadow-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  Read in Browser
                </a>
                <a
                  href={PDF_URL}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#243336] rounded-full text-sm font-medium text-[#243336] hover:bg-[#243336] hover:text-white transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
              <p className="mt-4 text-sm text-[#49636e]">
                Free to use for self-study or in your own course — no permission needed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-[#243336] mb-8">What's Inside</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {chapters.map((ch, index) => (
              <motion.div
                key={ch.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-[#f8faf9] rounded-xl border border-[#d4e4e0] p-6"
              >
                <span className="text-sm font-mono text-[#B26450]">{ch.num}</span>
                <h3 className="mt-1 text-lg font-bold text-[#3a525c]">{ch.title}</h3>
                <p className="mt-2 text-sm text-[#49636e] leading-relaxed">{ch.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation + course link */}
      <section className="border-t border-[#8FA49D]/30">
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-[#243336] mb-4">Citing These Notes</h2>
            <p className="text-[#243336] mb-4">
              Using this in a course or paper? Here's a BibTeX entry:
            </p>
            <div className="relative">
              <button
                onClick={copyBibtex}
                className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#3a525c] text-xs font-medium text-[#CDDACA] hover:bg-[#49636e] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#41A56C]" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied!" : "Copy"}
              </button>
              <pre className="bg-[#243336] text-[#CDDACA] text-sm rounded-xl p-5 pr-24 overflow-x-auto">
{bibtex}
              </pre>
            </div>
          </div>
          <div className="bg-[#f8faf9] rounded-xl border border-[#d4e4e0] p-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[#49636e] text-sm">
              These notes accompany <span className="font-semibold text-[#3a525c]">ENGS 105.1: Principles of Causality</span> at Dartmouth.
            </p>
            <Link
              to="/Teaching"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#B26450] hover:text-[#9d5644] transition-colors"
            >
              About the course
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}