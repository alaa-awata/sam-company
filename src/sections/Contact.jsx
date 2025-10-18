import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const { t } = useLanguage();

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => setSending(false), 1200);
  };

  // Observe when section enters/exits viewport
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
      className="relative py-12 md:py-20 bg-white overflow-hidden transition-all duration-1000 ease-out"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Left column (form) */}
          <div
            className={`col-span-12 md:col-span-7 relative transform transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
            ${visible ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"}`}
          >
            <div className="absolute left-2 top-6 transform rotate-45 w-6 h-6 border-2 border-black" />
            <div className="absolute left-4 top-28 w-6 h-6 bg-[#d3b8b8]" />

            <div className="w-full flex justify-center md:justify-start">
              <div className="pl-24 w-[85%] md:w-[65%] lg:w-[55%] animate-fadeUp">
                <h3 className="text-lg font-semibold mb-1">
                  {t("contact.title")}
                </h3>
                <p className="text-xs text-gray-600 mb-4">{t("contact.desc")}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="block">
                    <div className="text-xs font-medium text-gray-800 mb-1">
                      {t("contact.form.name")}
                    </div>
                    <input
                      name="name"
                      required
                      className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-[var(--sam-accent)] outline-none py-1.5 text-sm transition-colors"
                    />
                  </label>

                  <label className="block">
                    <div className="text-xs font-medium text-gray-800 mb-1">
                      {t("contact.form.email")}
                    </div>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-[var(--sam-accent)] outline-none py-1.5 text-sm transition-colors"
                    />
                  </label>

                  <label className="block">
                    <div className="text-xs font-medium text-gray-800 mb-1">
                      {t("contact.form.message")}
                    </div>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-[var(--sam-accent)] outline-none py-1.5 text-sm transition-colors resize-none"
                    />
                  </label>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-36 md:w-40 bg-[#3b3534] text-white py-1.5 rounded-sm font-semibold shadow-sm hover:opacity-95 transition-all text-sm"
                      aria-busy={sending}
                    >
                      {sending
                        ? t("contact.form.sending")
                        : t("contact.form.send")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right column (info) */}
          <div
            className={`col-span-12 md:col-span-5 relative flex justify-end transform transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
            ${visible ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"}`}
          >
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-[var(--sam-accent)] -z-10" />
            <div className="hidden md:block absolute right-28 top-8 w-6 h-6 bg-[#d3b8b8]" />

            <div className="relative z-10 w-full md:w-[320px] lg:w-[360px] animate-fadeUp delay-100">
              <div className="bg-neutral-900 text-white p-6 rounded-md shadow-xl">
                <h4 className="font-semibold mb-4">
                  {t("contact.info.title")}
                </h4>
                <div className="text-sm text-white/80 space-y-3">
                  <div>
                    <div className="text-xs text-white/60">
                      {t("contact.info.email")}
                    </div>
                    <div className="text-sm">{t("contact.info.emailValue")}</div>
                  </div>

                  <div>
                    <div className="text-xs text-white/60">
                      {t("contact.info.phone")}
                    </div>
                    <div className="text-sm">{t("contact.info.phoneValue")}</div>
                  </div>

                  <div>
                    <div className="text-xs text-white/60">
                      {t("contact.info.contact")}
                    </div>
                    <div className="text-sm">{t("contact.info.contactValue")}</div>
                  </div>

                  <div>
                    <div className="text-xs text-white/60">
                      {t("contact.info.hours")}
                    </div>
                    <div className="text-sm">{t("contact.info.hoursValue")}</div>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex flex-col items-center gap-3 absolute right-6 bottom-4">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:scale-110 transition-transform"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:scale-110 transition-transform"
                >
                  ig
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:scale-110 transition-transform"
                >
                  G
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 480ms ease both; opacity: 0; }
        .animate-fadeUp.delay-100 { animation-delay: 120ms; }

        @media (max-width: 768px) {
          .bg-[var(--sam-accent)] { display: none !important; }
        }
      `}</style>
    </section>
  );
}
