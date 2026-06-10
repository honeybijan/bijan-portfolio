import React from "react";

const TeachingCard = ({ course }) => {
  const { number, title, institution, years, description, downloads } = course;
  const hasDownloads = downloads?.notes || downloads?.homeworks;

  return (
    <div className="bg-[#2d3e42]/50 border border-[#b8d4ce]/20 rounded-lg p-6 space-y-4">
      <div className="space-y-1">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-mono text-[#B26450]">{number}</span>
          <h2 className="text-lg font-semibold text-[#e1ece3]">{title}</h2>
        </div>
        <div className="flex items-center gap-3 text-sm text-[#b8d4ce]">
          <span>{institution}</span>
          <span className="text-[#B26450]">·</span>
          <span>{years.join(" · ")}</span>
        </div>
      </div>
      <p className="text-sm text-[#b8d4ce] leading-relaxed">{description}</p>
      {hasDownloads && (
        <div className="flex gap-3 pt-1">
          {downloads.notes && (
            <a href={downloads.notes} download className="text-sm px-3 py-1.5 rounded-md border border-[#B26450] text-[#B26450] hover:bg-[#B26450] hover:text-[#e1ece3] transition-colors">
              Course Notes
            </a>
          )}
          {downloads.homeworks && (
            <a href={downloads.homeworks} download className="text-sm px-3 py-1.5 rounded-md border border-[#B26450] text-[#B26450] hover:bg-[#B26450] hover:text-[#e1ece3] transition-colors">
              Homeworks
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default TeachingCard;