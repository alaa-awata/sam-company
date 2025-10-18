import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard({ post }) {
  return (
    <article className="bg-white rounded-md overflow-hidden shadow-sm transform transition hover:-translate-y-2">
      <div className="relative">
        <img src={post.image} alt={post.title} className="w-full h-44 sm:h-52 object-cover" />
        <div className="absolute left-3 bottom-3 bg-white/90 text-xs px-2 py-1 rounded-full text-gray-700">
          {post.date}
        </div>
        <Link
          to={`/news/${post.id}`}
          className="absolute right-3 bottom-3 w-8 h-8 bg-[var(--sam-accent)] text-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
          aria-label={`Read ${post.title}`}
        >
          &rarr;
        </Link>
      </div>

      <div className="p-4">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800">{post.title}</h3>
        <div className="mt-2 text-xs text-gray-500">{post.time}</div>
      </div>
    </article>
  );
}