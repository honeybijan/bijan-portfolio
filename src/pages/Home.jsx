import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, BookOpen, FlaskConical, Trophy, Code } from "lucide-react";

const quickLinks = [
  { label: "Research", path: "/Research", icon: FlaskConical, desc: "Causality, mixtures, distribution shift" },
  { label: "Experience", path: "/Experience", icon: BookOpen, desc: "Academic & industry positions" },
  { label: "Side Projects", path: "/SideProjects", icon: Code, desc: "LACCTiC & more" },
  { label: "Running", path: "/Running", icon: Trophy, desc: "Olympic Trials, national championships" },
];

const interests = [
  "Causality",
  "Distribution Shift",
  "Discrete Mixture Models",
  "High-Level Data Fusion",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/20" />
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
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-blue-200/40">
                  <img
                    src="https://avatars.githubusercontent.com/u/73279829?v=4"
                    alt="Bijan Mazaheri"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-xl bg-cyan-100/80 -z-10" />
                <div className="absolute -top-3 -left-3 w-16 h-16 rounded-lg bg-blue-100 -z-10" />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-2 md:order-none"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                Bijan Mazaheri
              </h1>

              <div className="mt-4 space-y-1">
                <p className="text-lg text-slate-700 font-medium">
                  Assistant Professor — Dartmouth Engineering
                </p>
                <p className="text-base text-slate-600">
                  Visiting Scientist — Broad Institute of MIT and Harvard
                </p>
              </div>

              <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="w-3.5 h-3.5" />
                <span>Hanover, NH</span>
              </div>

              <p className="mt-6 text-slate-600 leading-relaxed max-w-xl">
                I am interested in information-theoretical questions pertaining to causality, experimental design, and artificial intelligence. I am working to apply these ideas to new computational challenges in defense and biology. I am also an internationally competitive distance runner and the developer of{" "}
                <a href="https://www.lacctic.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-800 underline decoration-cyan-300 underline-offset-2">
                  LACCTiC
                </a>.
              </p>

              <p className="mt-3 text-slate-600 leading-relaxed max-w-xl font-medium text-sm">
                I am recruiting postdocs and Ph.D. students.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:bijan.h.mazaheri@dartmouth.edu"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
                <a
                  href="https://scholar.google.com/citations?user=DXEdM48AAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Google Scholar
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-8">Explore</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={link.path}
                className="group block p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/60 transition-all duration-300"
              >
                <link.icon className="w-5 h-5 text-cyan-600 mb-3" />
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {link.label}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{link.desc}</p>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-600 mt-4 transition-all group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education snapshot */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-8">Education</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { degree: "PhD in Computing & Mathematical Sciences", school: "Caltech", years: "2017–2023" },
              { degree: "Part IB Mathematics", school: "University of Cambridge", years: "2016–2017" },
              { degree: "BA in Physics & Computer Science", school: "Williams College", years: "2012–2016" },
            ].map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 bg-white rounded-xl border border-slate-200"
              >
                <p className="text-xs font-medium text-cyan-700 tracking-wide uppercase">{edu.years}</p>
                <p className="mt-2 font-semibold text-slate-900 text-sm leading-snug">{edu.degree}</p>
                <p className="mt-1 text-sm text-slate-600">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}