import React from "react";
import SectionHeading from "../components/shared/SectionHeading";
import TeachingCard from "../components/TeachingCard";
import { engs105_1 } from "../components/data/courses/engs105_1";
import { engs27 } from "../components/data/courses/engs27";

const courses = [engs105_1, engs27];

export default function Teaching() {
  return (
    <div className="bg-[#CDDACA] min-h-screen">
      <section className="bg-[#CDDACA] border-b border-[#8FA49D]/30">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <SectionHeading title="Teaching" />
        </div>
      </section>

      <section className="bg-[#CDDACA]">
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-6">
          {courses.map((course, index) => (
            <TeachingCard key={course.number} course={course} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}