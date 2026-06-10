import React from "react";
import TeachingCard from "../components/TeachingCard";
import { engs105_1 } from "../components/data/courses/engs105_1";
import { engs27 } from "../components/data/courses/engs27";

const courses = [engs105_1, engs27];

const Teaching = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-[#e1ece3]">Teaching</h1>
      <div className="space-y-6">
        {courses.map((course) => (
          <TeachingCard key={course.number} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Teaching;