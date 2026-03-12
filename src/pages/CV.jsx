import React from "react";
import { motion } from "framer-motion";
import { cvData } from "@/components/data/cvData";
import { Download, Mail, MapPin, Phone, Globe, Github } from "lucide-react";

export default function CV() {
  return (
    <div className="bg-[#c1dfd1] min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
        >
          {/* Header */}
          <div className="border-b border-[#d4e4e0] pb-6 mb-8">
            <h1 className="text-4xl font-bold text-[#3a525c] mb-4">{cvData.contact.name}</h1>
            <div className="grid sm:grid-cols-2 gap-2 text-sm text-[#49636e]">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <a href={`https://${cvData.contact.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#5b9bb5]">
                  {cvData.contact.website}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${cvData.contact.email}`} className="hover:text-[#5b9bb5]">
                  {cvData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a href={`https://${cvData.contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#5b9bb5]">
                  {cvData.contact.github}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{cvData.contact.location}</span>
              </div>
            </div>
            <p className="mt-4 text-[#49636e] leading-relaxed">{cvData.summary}</p>
            <a
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b2aceda872b69be2b6d807/3af9b8f04_bijanmazaheri_cv_cw1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#49636e] text-white rounded-lg text-sm font-medium hover:bg-[#3a525c] transition-colors"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#3a525c] mb-6 border-b border-[#d4e4e0] pb-2">Education</h2>
            <div className="space-y-6">
              {cvData.education.map((edu, i) => (
                <div key={i} className="border-l-2 border-[#5b9bb5] pl-4">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="font-bold text-[#3a525c]">{edu.institution}</h3>
                    <span className="text-sm text-[#5a7580] italic">{edu.period}</span>
                  </div>
                  <p className="text-[#49636e] font-medium">{edu.degree}</p>
                  {edu.field && <p className="text-sm text-[#5a7580]">{edu.field}{edu.gpa && `, GPA: ${edu.gpa}`}</p>}
                  {edu.honors && <p className="text-sm text-[#5a7580] italic">{edu.honors}</p>}
                  {edu.thesis && <p className="text-sm text-[#49636e] mt-1">Thesis: {edu.thesis}</p>}
                  {edu.advisors && <p className="text-sm text-[#49636e]">{edu.advisors}</p>}
                  {edu.notes && <p className="text-sm text-[#5a7580] italic">{edu.notes}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Academic Positions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#3a525c] mb-6 border-b border-[#d4e4e0] pb-2">Academic Appointments</h2>
            <div className="space-y-6">
              {cvData.positions.map((pos, i) => (
                <div key={i} className="border-l-2 border-[#5b9bb5] pl-4">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="font-bold text-[#3a525c]">{pos.title}</h3>
                    <span className="text-sm text-[#5a7580] italic">{pos.period}</span>
                  </div>
                  <p className="text-[#49636e]">{pos.institution}</p>
                  {pos.location && <p className="text-sm text-[#5a7580]">{pos.location}</p>}
                  {pos.advisor && <p className="text-sm text-[#49636e]">Advisor: {pos.advisor}</p>}
                  {pos.affiliations && (
                    <ul className="mt-1 text-sm text-[#5a7580] space-y-0.5">
                      {pos.affiliations.map((aff, j) => (
                        <li key={j}>• {aff}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Industry Experience */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#3a525c] mb-6 border-b border-[#d4e4e0] pb-2">Industry Experience</h2>
            <div className="space-y-6">
              {cvData.industryExperience.map((exp, i) => (
                <div key={i} className="border-l-2 border-[#5b9bb5] pl-4">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="font-bold text-[#3a525c]">{exp.title}</h3>
                    <span className="text-sm text-[#5a7580] italic">{exp.period}</span>
                  </div>
                  <p className="text-[#49636e]">{exp.company}</p>
                  {exp.location && <p className="text-sm text-[#5a7580]">{exp.location}</p>}
                  {exp.collaborators && <p className="text-sm text-[#49636e]">Worked with {exp.collaborators}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Awards and Grants */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#3a525c] mb-6 border-b border-[#d4e4e0] pb-2">Awards and Grants</h2>
            <div className="space-y-4">
              {cvData.awards.map((award, i) => (
                <div key={i} className="border-l-2 border-[#5b9bb5] pl-4">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="font-bold text-[#3a525c]">{award.name}</h3>
                    <span className="text-sm text-[#5a7580] italic">{award.date}</span>
                  </div>
                  <p className="text-sm text-[#49636e]">{award.description}</p>
                  <p className="text-sm text-[#5b9bb5] font-medium">{award.amount}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Teaching */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#3a525c] mb-6 border-b border-[#d4e4e0] pb-2">Teaching</h2>
            <div className="space-y-4">
              {cvData.teaching.map((teach, i) => (
                <div key={i} className="flex justify-between items-start border-l-2 border-[#5b9bb5] pl-4">
                  <div>
                    <p className="font-medium text-[#3a525c]">{teach.course}</p>
                    <p className="text-sm text-[#5a7580]">{teach.type} • {teach.institution}</p>
                  </div>
                  <span className="text-sm text-[#5a7580] italic whitespace-nowrap ml-4">{teach.period}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-8 pt-6 border-t border-[#d4e4e0] text-center">
            <p className="text-sm text-[#5a7580]">
              To update this CV, edit the file: <code className="bg-[#e8f3ef] px-2 py-1 rounded text-xs">data/cvData.js</code>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}