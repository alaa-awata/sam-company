import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="w-screen h-screen bg-white flex items-start justify-center pt-[5%] px-6 animate-fadeIn overflow-auto">
      <div className="max-w-4xl w-full space-y-6">

        {/* Back to landing page */}
        <div className="text-left mb-6">
          <Link
            to="/"
            className="bg-[#7a1c1c] text-white px-6 py-2 rounded-md shadow-md hover:bg-red-700 transition-all hover:scale-105 active:scale-95"
          >
            {t("aboutPage.backHome")}
          </Link>
        </div>

        {/* Company Info */}
        <p className="text-gray-700 text-base md:text-lg text-center">
          {t("aboutPage.description")}
        </p>

        {/* Branches */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md space-y-4">
          <h2 className="font-semibold text-gray-800 text-lg">{t("aboutPage.branchesTitle")}</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {t("aboutPage.branches").map((branch, idx) => (
              <li key={idx}>{branch}</li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            title={t("aboutPage.mapTitle")}
            src={t("aboutPage.mapSrc")}
            width="100%"
            height="400"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
}
