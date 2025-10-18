import React, { useState, useEffect, useRef } from "react";
import OfferCard from "../components/OfferCard";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Offers() {
  const [billing, setBilling] = useState("annual");
  const { t } = useLanguage();
  const offers = t("offers");
  const plans = offers?.plans || [];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-12 md:py-20 transition-all duration-[1200ms] ease-out overflow-hidden
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 animate-title">
            {offers.title}
          </h2>
          <p className="mt-2 text-sm text-gray-500">{offers.subtitle}</p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <span className="text-sm font-medium text-[var(--sam-accent)]">{offers.billingMonthly}</span>

          <button
            aria-pressed={billing === "annual"}
            onClick={() => setBilling((b) => (b === "monthly" ? "annual" : "monthly"))}
            className="relative w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center p-1 transition-colors"
          >
            <span
              className={`absolute left-1 w-6 h-6 bg-white rounded-full transform transition-transform duration-300 ${
                billing === "annual" ? "translate-x-8" : "translate-x-0"
              }`}
            />
          </button>

          <span className="text-sm font-medium text-[var(--sam-accent)]">{offers.billingAnnually}</span>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(plans) &&
            plans.map((p, i) => (
              <div
                key={p.name}
                className={`transition-all duration-700 transform
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                  hover:-translate-y-2 hover:shadow-xl`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <OfferCard plan={p} billing={billing} />
              </div>
            ))}
        </div>
      </div>

      {/* ✨ Animations */}
      <style>{`
        @keyframes titleReveal {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-title {
          animation: titleReveal 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
