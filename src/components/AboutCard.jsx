import React from "react";

export default function AboutCard({ title, children, icon }) {
  return (
    <article className="relative rounded-lg shadow-lg overflow-hidden bg-white/90 p-6 md:p-8 min-h-[240px] flex flex-col">
      {/* decorative top rectangle (subtle) */}
      <div
        className="absolute -top-3 left-6 right-6 h-2 rounded"
        style={{ background: "var(--sam-accent)" }}
        aria-hidden
      />
      <div className="flex-1 flex flex-col">
        <div className="mb-4 text-[var(--sam-accent)]">{icon}</div>
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <div className="text-sm md:text-base text-gray-600 mt-1 flex-1">{children}</div>
      </div>
    </article>
  );
}