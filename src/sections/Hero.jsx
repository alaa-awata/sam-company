import React from "react";
import hero from "../assets/hero.png";
import { useLanguage } from "../i18n/LanguageProvider";
import { Link } from "react-router-dom"; // or 'next/link' if using Next.js

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center transform translate-y-6 md:translate-y-12">
        {/* Left content */}
        <div className="space-y-6 text-center md:text-left animate-fadeUp">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            <span className="text-[#7a1c1c] mr-2">{t("hero.pre")}</span>
            <span className="font-semibold block md:inline">{t("hero.title")}</span>
          </h1>

          <p className="text-gray-500 max-w-xl mx-auto md:mx-0 text-base sm:text-lg">
            {t("hero.desc")}
          </p>

          {/* CTA button linking to About page */}
          <div className="flex justify-center md:justify-start mt-4">
            <Link
              to="/about" // or href="/about" if using Next.js
              className="bg-[#7a1c1c] text-white px-8 py-3 rounded-md shadow-md hover:bg-red-700 transition-all hover:scale-105 active:scale-95"
            >
              {t("hero.cta")}
            </Link>
          </div>
        </div>

        {/* Right content */}
        <div className="flex justify-center md:justify-end animate-float">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-full bg-gray-300 opacity-40 blur-md hover:animate-spin-slow transition-transform origin-center" />

            <div
              className="relative z-10 w-full h-full rounded-full overflow-hidden flex items-center justify-center"
              style={{
                background: "linear-gradient(180deg, #870903 0%, #230C0C 100%)",
                boxShadow: "28px 36px 10.1px rgba(0, 0, 0, 0.25)",
              }}
            >
              <img
                src={hero}
                alt="Router device"
                className="w-3/4 h-auto object-contain drop-shadow-2xl"
                style={{ mixBlendMode: "normal" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 1s ease-out forwards; }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }

        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .hover\\:animate-spin-slow:hover { animation: spinSlow 5s linear infinite; }
      `}</style>
    </section>
  );
}
