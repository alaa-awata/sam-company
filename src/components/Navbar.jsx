import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider"; // added

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "offers", label: "Offers" },
  { id: "team", label: "The Team" },
  { id: "faq", label: "FAQ" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { lang, setLang, t } = useLanguage(); // using i18n

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // determine active section
      const headerHeight = document.querySelector("header")?.offsetHeight || 80;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const top = rect.top;
        if (top <= headerHeight + 8 && rect.bottom > headerHeight + 8) {
          setActive(s.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerHeight = document.querySelector("header")?.offsetHeight || 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
    window.scrollTo({ top, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md border-b border-gray-200" : "bg-transparent"
      }`}
    >
      {/* Top strip */}
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between text-sm text-gray-700">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang("ar")}
            aria-pressed={lang === "ar"}
            className={`transition ${lang === "ar" ? "text-[#7a1c1c] font-medium" : "text-gray-500 hover:text-gray-700"}`}
          >
            {t("top.arabic")}
          </button>

          <button
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
            className={`transition ${lang === "en" ? "text-[#7a1c1c] font-medium" : "text-gray-500 hover:text-gray-700"}`}
          >
            {t("top.english")}
          </button>
        </div>

        <div className="text-gray-600">{t("top.email")}</div>
      </div>

      {/* line under top strip */}
      <div className="h-px bg-gray-200" />

      {/* Main nav */}
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-gray-700">
        {/* Logo */}
        <img src={logo} alt="Sam Company" className="h-12 w-auto cursor-pointer" onClick={() => scrollToSection("home")} />

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <li
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`cursor-pointer transition ${
                active === s.id ? "text-[#7a1c1c] font-semibold" : "hover:text-[#7a1c1c]"
              }`}
            >
              {t(`nav.${s.id === "team" ? "team" : s.id}`)} {/* mapping id to nav keys */}
            </li>
          ))}
        </ul>

        {/* Right Button */}
        <div className="hidden md:block">
          <button onClick={() => scrollToSection("contact")} className="px-4 py-2 rounded-full border border-[#7a1c1c] text-[#7a1c1c] hover:bg-[#fff1f1] transition">
            {t("nav.contact")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* line under main navbar */}
      <div className="h-px bg-gray-200" />

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700">
            {sections.map((s) => (
              <li
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`cursor-pointer ${active === s.id ? "text-[#7a1c1c] font-semibold" : ""}`}
              >
                {s.label}
              </li>
            ))}
            <button onClick={() => scrollToSection("contact")} className="px-4 py-2 rounded-full border border-[#7a1c1c] text-[#7a1c1c] hover:bg-[#fff1f1] transition">
              Contact Us
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
