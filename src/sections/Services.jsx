import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Services() {
  const { t } = useLanguage();
  const servicesData = t("services.list") || [];
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Observe when section enters viewport
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
      className={`relative py-16 md:py-24 transition-all duration-[1200ms] ease-out overflow-hidden
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* 🏷 Centered Title + Description */}
        <div className="mb-10">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#7a1c1c] animate-title"
          >
            {t("services.title")}
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            {t("services.desc")}
          </p>
        </div>

        {/* Divider Line */}
        <div className="flex justify-center mb-8">
          <div className="h-px bg-gray-300 w-40 md:w-64" />
        </div>

        {/* 💼 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((s, i) => (
            <div
              key={i}
              className={`transition-all duration-700 transform
                hover:scale-[1.05] hover:shadow-2xl hover:-translate-y-2
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <ServiceCard
                title={s.title}
                description={s.description}
                image={s.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✨ Local Styles */}
      <style>{`
        @keyframes titleReveal {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-title {
          animation: titleReveal 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
