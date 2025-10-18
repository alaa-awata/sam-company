import React, { useEffect, useRef, useState } from "react";
import AboutCard from "../components/AboutCard";
import aboutBg from "../assets/about.webp";
import { useLanguage } from "../i18n/LanguageProvider";

export default function AboutSection() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const title = t("about.title");
  const desc = t("about.desc");
  const cards = t("about.cards") || [];

  const renderBody = (body) => {
    if (!body) return null;
    if (Array.isArray(body))
      return body.map((line, i) => <p key={i} className="mb-1">{line}</p>);
    if (typeof body === "string")
      return body.split("\n").map((line, i) => <p key={i} className="mb-1">{line}</p>);
    return <p className="mb-1">{String(body)}</p>;
  };

  const icons = [
    (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" d="M3 12l2-2 4 4 8-8 4 4" /></svg>),
    (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" d="M12 2v6M5 12h14M4 20h16" /></svg>),
    (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" d="M12 2a10 10 0 100 20 10 10 0 000-20zM8 12l2 2 4-4" /></svg>)
  ];

  // ✨ Scroll-triggered visibility
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
      className={`relative py-16 md:py-24 overflow-hidden transition-all duration-[1200ms] ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" aria-hidden />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* 🏷 Centered Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#7a1c1c] mb-3 animate-title">
            {title}
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            {desc}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {cards.map((c, index) => (
            <div
              key={c.title || index}
              className={`transition-all duration-700 transform hover:scale-[1.04] hover:shadow-2xl
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <AboutCard title={c.title} icon={icons[index] || null}>
                {renderBody(c.body)}
              </AboutCard>
            </div>
          ))}
        </div>
      </div>

      {/* ✨ Local Styles for Keyframes */}
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
