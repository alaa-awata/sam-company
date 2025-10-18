import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageProvider"; // ✅ make sure this exists

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer
      className="bg-white mt-12 border-t border-gray-200"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Sam Company" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-gray-600">{t("footer.description")}</p>

            <div className="text-sm text-gray-600">
              <div>{t("footer.email")}</div>
              <div className="mt-1">{t("footer.phone")}</div>
            </div>

            {/* Social media */}
            <div
              className={`flex items-center gap-3 mt-4 ${
                lang === "ar" ? "justify-end" : ""
              }`}
            >
              <a
                href="#"
                aria-label="facebook"
                className="w-9 h-9 rounded-full bg-[var(--sam-accent)]/10 text-[var(--sam-accent)] flex items-center justify-center hover:scale-105 transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9v-2.9h2.6V9.1c0-2.6 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.77-1.6 1.6v1.86h2.8l-.45 2.9h-2.35V21.9A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="instagram"
                className="w-9 h-9 rounded-full bg-[var(--sam-accent)]/10 text-[var(--sam-accent)] flex items-center justify-center hover:scale-105 transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zM18 7.2a1.2 1.2 0 1 0 1.2 1.2A1.2 1.2 0 0 0 18 7.2z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="linkedin"
                className="w-9 h-9 rounded-full bg-[var(--sam-accent)]/10 text-[var(--sam-accent)] flex items-center justify-center hover:scale-105 transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.99h3.96V24H.5V8.99zM8.5 8.99h3.8v2.02h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.09V24h-3.96v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.76 1.87-2.76 3.8V24H8.5V8.99z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-800">
              {t("footer.quickLinks.title")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-[var(--sam-accent)]"
                >
                  {t("footer.quickLinks.home")}
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-[var(--sam-accent)]"
                >
                  {t("footer.quickLinks.about")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-[var(--sam-accent)]"
                >
                  {t("footer.quickLinks.services")}
                </a>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-600 hover:text-[var(--sam-accent)]"
                >
                  {t("footer.quickLinks.news")}
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-[var(--sam-accent)]"
                >
                  {t("footer.quickLinks.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-800">
              {t("footer.services.title")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#home-internet" className="hover:text-[var(--sam-accent)]">
                  {t("footer.services.homeInternet")}
                </a>
              </li>
              <li>
                <a href="#business-internet" className="hover:text-[var(--sam-accent)]">
                  {t("footer.services.businessInternet")}
                </a>
              </li>
              <li>
                <a href="#iptv" className="hover:text-[var(--sam-accent)]">
                  {t("footer.services.iptv")}
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-[var(--sam-accent)]">
                  {t("footer.services.coverage")}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-800">
              {t("footer.newsletter.title")}
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              {t("footer.newsletter.description")}
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="flex-1 px-3 py-2 border border-gray-200 rounded-sm text-sm outline-none focus:ring-1 focus:ring-[var(--sam-accent)]"
              />
              <button className="px-4 py-2 bg-[var(--sam-accent)] text-white text-sm rounded-sm">
                {t("footer.newsletter.button")}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-gray-100 pt-6 text-sm text-gray-500 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>{t("footer.rights", { year: new Date().getFullYear() })}</div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[var(--sam-accent)]">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="hover:text-[var(--sam-accent)]">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
