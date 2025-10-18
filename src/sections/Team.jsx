import React, { useEffect, useRef, useState } from "react";
import TeamCard from "../components/TeamCard";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Team() {
  const { t } = useLanguage();
  const members = t("team.members");

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Observe when section enters/exits viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
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
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Title */}
        <div className="text-center mb-8 animate-title">
          <h2 className="text-2xl font-extrabold text-[var(--sam-accent)]">
            {t("team.title")}
          </h2>
          <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
            {t("team.desc")}
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
          {Array.isArray(members) &&
            members.map((m, i) => (
              <div
                key={m.name}
                className={`pt-8 md:pt-12 transform transition-all duration-700 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                hover:-translate-y-2 hover:shadow-2xl`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <TeamCard
                  name={m.name}
                  role={m.role}
                  image={
                    m.name.includes("Khaled Abdel Raouf")
                      ? "https://i.pinimg.com/736x/c9/7c/ed/c97cedb410e3f3e2c78d2a11a0e26356.jpg"
                      : m.name.includes("Hatem")
                      ? "https://i.pinimg.com/736x/eb/35/37/eb35371ed9a7f5386cdae3cc949eeed1.jpg"
                      : "https://i.pinimg.com/736x/90/1e/9c/901e9c722dfc110924863b61ae7d64a2.jpg"
                  }
                />
              </div>
            ))}
        </div>
      </div>

      {/* Accent background bar */}
      <div className="hidden sm:block absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-36 md:h-44 bg-[var(--sam-accent)] -z-10" />

      <style>{`
        @keyframes titleReveal {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-title {
          animation: titleReveal 1.2s ease-out forwards;
        }

        @media (max-width: 640px) {
          .bg-[var(--sam-accent)] { height: 220px; }
        }
      `}</style>
    </section>
  );
}
