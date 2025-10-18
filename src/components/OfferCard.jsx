import React from "react";

export default function OfferCard({ plan, billing = "monthly" }) {
  const price = billing === "monthly" ? plan.monthly : plan.annual;
  const sublabel = billing === "monthly" ? "/Month" : "/Year";

  return (
    <article className="relative rounded-xl overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.08)] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] bg-white text-[#1a1a1a]">
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div>
            {plan.recommended && (
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--sam-accent)]/10 text-[var(--sam-accent)] mb-2">
                Recommended
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-bold text-[var(--sam-accent)]">
              {plan.name}
            </h3>
          </div>

          <div className="text-right">
            <div className="text-3xl md:text-4xl font-extrabold leading-none transition-all duration-500 text-[#000000]">
              <span
                key={billing}
                className="inline-block align-baseline transform transition-opacity duration-400"
                style={{ willChange: "opacity, transform" }}
              >
                ${price}
              </span>
            </div>
            <div className="text-sm text-gray-600">{sublabel}</div>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-700 flex-1 leading-relaxed">
          {plan.description}
        </p>

        <ul className="mt-4 space-y-2 text-sm">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 inline-block w-3 h-3 rounded-full bg-green-800" />
              <span className="text-gray-800">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button
            className="w-full py-3 rounded-full bg-[var(--sam-accent)] text-white font-semibold hover:opacity-90 transition-colors"
            aria-label={`Choose ${plan.name}`}
          >
            {plan.cta}
          </button>
        </div>
      </div>
    </article>
  );
}
