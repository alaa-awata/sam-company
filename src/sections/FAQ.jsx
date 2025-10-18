import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageProvider";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const { t } = useLanguage();
  const faqs = t("faq.list");

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const toggle = (i) => setOpen((prev) => (prev === i ? null : i));

  // Section enter/exit visibility
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
      className="py-12 md:py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left column */}
          <div
            className={`space-y-4 transform transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
              ${visible ? "slide-left-in opacity-100" : "slide-left-out opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--sam-accent)]">
              {t("faq.title1")}
              <br />
              <span className="block text-3xl md:text-4xl">{t("faq.title2")}</span>
            </h2>
            <p className="text-sm text-gray-600 max-w-md">{t("faq.desc")}</p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--sam-accent)] hover:underline"
            >
              {t("faq.more")}
            </a>
          </div>

          {/* Right column */}
          <div
            className={`space-y-3 transform transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
              ${visible ? "slide-right-in opacity-100" : "slide-right-out opacity-0"}`}
          >
            {Array.isArray(faqs) &&
              faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  index={i}
                  open={open === i}
                  onToggle={() => toggle(i)}
                  question={f.q}
                  answer={f.a}
                />
              ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Section animations */
        .slide-left-in { transform: translateX(0); opacity: 1; }
        .slide-left-out { transform: translateX(-40px); opacity: 0; }
        .slide-right-in { transform: translateX(0); opacity: 1; }
        .slide-right-out { transform: translateX(40px); opacity: 0; }

        /* Accordion open/close animation */
        .accordion-body {
          overflow: hidden;
          transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
        }
      `}</style>
    </section>
  );
}

function AccordionItem({ open, onToggle, question, answer }) {
  const contentRef = useRef(null);
  const [maxH, setMaxH] = useState("0px");

  useEffect(() => {
    if (open) setMaxH(`${contentRef.current.scrollHeight}px`);
    else setMaxH("0px");
  }, [open]);

  return (
    <div className="border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm transition-all duration-500 hover:shadow-md">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-4 py-4 md:py-5 text-left"
      >
        <span className="text-sm md:text-base font-medium text-gray-800">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
            open ? "rotate-45 scale-110" : "rotate-0 scale-100"
          }`}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <div
        ref={contentRef}
        className="accordion-body px-4"
        style={{
          maxHeight: maxH,
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-10px)"
        }}
      >
        <div className="py-3 text-sm text-gray-600">{answer}</div>
      </div>
    </div>
  );
}
