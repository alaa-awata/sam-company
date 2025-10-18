import React from "react";

export default function ServiceCard({ title, description, image }) {
  return (
    <article className="relative rounded-sm overflow-hidden min-h-[320px] flex flex-col justify-end">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        {/* Rectangle 12 overlay (above image) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179.95deg, #5E3432 39.59%, rgba(29, 5, 5, 0) 81.75%)",
            mixBlendMode: "multiply",
          }}
          aria-hidden
        />
        {/* small top decorative bar using root color (made lighter) */}
        <div
          className="absolute left-6 right-6 -top-3 h-2 rounded"
          style={{ background: "rgba(122, 28, 28, 0.35)" }}
          aria-hidden
        />
      </div>

      {/* Content (on top of image + overlay) */}
      <div className="relative p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm md:text-base text-white/95 leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}