import React from "react";

export default function TeamCard({ name, role, image }) {
  return (
    <article className="flex flex-col items-center text-center">
      <div className="relative w-44 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <h4 className="mt-4 text-lg font-bold text-[var(--sam-accent)] sm:text-white transition-colors">
        {name}
      </h4>
      <p className="text-sm text-gray-600 sm:text-white transition-colors">
        {role}
      </p>
    </article>
  );
}