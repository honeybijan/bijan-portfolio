import React from "react";
import SectionHeading from "../components/shared/SectionHeading";
import TimelineItem from "../components/experience/TimelineItem";

const academic = [
  {
    title: "Assistant Professor",
    company: "Thayer School of Engineering at Dartmouth",
    location: "Hanover, NH",
    period: "Jan 2025 — Present",
    current: true,
  },
  {
    title: "Eric and Wendy Schmidt Postdoctoral Associate",
    company: "Broad Institute of MIT and Harvard",
    location: "Cambridge, MA",
    period: "Oct 2023 — Dec 2024",
    description: "Postdoctoral advisor: Prof. Caroline Uhler.",
  },
  {
    title: "PhD in Computing and Mathematical Sciences",
    company: "California Institute of Technology (Caltech)",
    location: "Pasadena, CA",
    period: "Sep 2017 — Aug 2023",
    description:
      "Advisors: Prof. Shuki Bruck and Prof. Leonard Schulman. Funded by an NSF Graduate Research Fellowship and an Amazon AI4Science Fellowship.",
  },
  {
    title: "Herchel Smith Fellowship",
    company: "University of Cambridge",
    location: "Cambridge, UK",
    period: "Sep 2016 — Jun 2017",
  },
  {
    title: "BA in Physics and Computer Science",
    company: "Williams College",
    location: "Williamstown, MA",
    period: "Sep 2012 — Jun 2016",
  },
];

const industry = [
  {
    title: "Applied Scientist Intern",
    company: "Amazon Science Causality Lab (AWS)",
    location: "Tübingen, Germany",
    period: "Sep 2022 — Feb 2023",
    description:
      "Paper submission to UAI 2023 on robustness to distribution shift using proxy variables. Worked with Dr. Mila Hardt, Dr. Atalanti Mastakouri, and Dr. Dominik Janzing.",
  },
  {
    title: "Machine Learning Intern",
    company: "BioDiscovery",
    location: "El Segundo, CA",
    period: "Jun — Sep 2017",
    description: "Cancer classification using machine learning. Worked with Dr. Soheil Shams.",
  },
  {
    title: "Research Intern",
    company: "IBM Research",
    location: "Yorktown Heights, NY",
    period: "Jun — Sep 2016",
    description:
      "Factoring sum of products to optimize 2D wire layout. Worked with Dr. Victor Kravets.",
  },
];

export default function Experience() {
  return (
    <div>
      <section className="bg-[#d4ebe4] border-b border-[#d4e4e0]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <SectionHeading title="Experience" subtitle="A timeline of academic and industry positions." />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xs font-semibold text-[#5a7580] uppercase tracking-wider mb-8">
              Academic
            </h3>
            <div>
              {academic.map((item, i) => (
                <TimelineItem key={item.title + item.company} item={item} index={i} isLast={i === academic.length - 1} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-[#5a7580] uppercase tracking-wider mb-8">
              Industry
            </h3>
            <div>
              {industry.map((item, i) => (
                <TimelineItem key={item.title + item.company} item={item} index={i} isLast={i === industry.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}