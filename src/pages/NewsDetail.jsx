import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageProvider";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, lang } = useLanguage();

  // Get posts from translation data
  const posts = t("news.posts");
  const post = posts?.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="py-20" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gray-600">{lang === "ar" ? "المقال غير موجود." : "Article not found."}</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 text-[var(--sam-accent)] underline"
          >
            {lang === "ar" ? "عودة" : "Return"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <article
      className="pt-24 md:pt-28 pb-12"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-[var(--sam-accent)] underline mb-4"
        >
          {lang === "ar" ? "← عودة" : "← Return"}
        </button>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-2xl md:text-3xl font-extrabold mb-3">
          {post.title}
        </h1>
        <div className="text-xs text-gray-500 mb-6">
          {post.date} • {post.time}
        </div>
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>
    </article>
  );
}
