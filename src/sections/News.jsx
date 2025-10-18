import React from "react";
import NewsCard from "../components/NewsCard";
import { useLanguage } from "../i18n/LanguageProvider";

export default function News() {
  const { t } = useLanguage();
  const posts = t("news.posts");

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6" dir={t("lang") === "ar" ? "rtl" : "ltr"}>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
            {t("news.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div key={p.id} className="animate-fadeIn">
              <NewsCard post={p} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(8px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-fadeIn { animation: fadeIn 420ms ease both; }
      `}</style>
    </section>
  );
}
