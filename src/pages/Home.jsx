import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, BookOpen, FlaskConical, Trophy, Code } from "lucide-react";

const quickLinks = [
  { label: "CV", path: "/CV", icon: BookOpen, desc: "Full curriculum vitae" },
  { label: "Side Projects", path: "/SideProjects", icon: Code, desc: "LACCTiC & more" },
  { label: "Running", path: "/Running", icon: Trophy, desc: "Olympic Trials, national championships" },
];

const interests = [
  "Causality",
  "Information Networks",
  "AI4Science",
  "Heterogenious Data",
  "Experimental Design",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#CDDACA]" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-[1fr,1.2fr] gap-12 md:gap-16 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center md:justify-end order-1 md:order-none"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-[#49636e]/20 ring-8 ring-[#5b9bb5]">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b2aceda872b69be2b6d807/fec4e1fd0_20251114-Bijan-Mazaheri-kl-71.jpg"
                    alt="Bijan Mazaheri"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-2 md:order-none"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#243336]">
                Bijan Mazaheri
              </h1>

              <div className="mt-4 space-y-1">
                <p className="text-lg text-[#243336] font-medium">
                  Assistant Professor —{" "}
                  <a href="https://engineering.dartmouth.edu/" target="_blank" rel="noopener noreferrer" className="text-[#B26450] hover:text-[#9d5644] underline decoration-[#B26450]/30 underline-offset-2">
                    Dartmouth Engineering
                  </a>
                </p>
                <p className="text-base text-[#243336]">
                  Visiting Scientist —{" "}
                  <a href="https://www.ericandwendyschmidtcenter.org/" target="_blank" rel="noopener noreferrer" className="text-[#4A6A7A] hover:text-[#2A3C42] underline decoration-[#4A6A7A]/30 underline-offset-2">
                    Broad Institute of MIT and Harvard
                  </a>
                </p>
              </div>

              <div className="mt-2 flex items-center gap-2 text-sm text-[#243336]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Hanover, NH</span>
              </div>

              <p className="mt-6 text-[#243336] leading-relaxed max-w-xl">
                I lead the{" "}
                <a href="https://cedarlab.dartmouth.edu" target="_blank" rel="noopener noreferrer" className="text-[#B26450] hover:text-[#9d5644] underline decoration-[#B26450]/30 underline-offset-2 font-medium">
                  Dartmouth CEDAR Lab
                </a>
                , where we work on information-theoretical questions pertaining to causality, experimental design, and artificial intelligence. I am applying these ideas to new computational challenges in defense and biology. I am also an internationally competitive distance runner and the developer of{" "}
                <a href="https://www.lacctic.com/" target="_blank" rel="noopener noreferrer" className="text-[#4A6A7A] hover:text-[#2A3C42] underline decoration-[#4A6A7A]/30 underline-offset-2">
                  LACCTiC
                </a>.
              </p>

              <p className="mt-3 text-[#243336] leading-relaxed max-w-xl font-medium text-sm">
                I am recruiting postdocs and Ph.D. students.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full bg-white/60 text-[#243336] text-xs font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:bijan.h.mazaheri@dartmouth.edu"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B26450] text-white rounded-lg text-sm font-medium hover:bg-[#9d5644] transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
                <a
                  href="https://scholar.google.com/citations?user=DXEdM48AAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#4A6A7A] rounded-lg text-sm font-medium text-[#243336] hover:bg-[#E2ECE0] transition-colors"
                >
                  Google Scholar
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
}