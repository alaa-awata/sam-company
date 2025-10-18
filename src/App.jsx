import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import LanguageProvider from "./i18n/LanguageProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Sections & pages
import Hero from "./sections/Hero";
import AboutSection from "./sections/About"; // main landing about section
import Services from "./sections/Services";
import Offers from "./sections/Offers";
import Team from "./sections/Team";
import Contact from "./sections/Contact";
import FAQ from "./sections/FAQ";
import News from "./sections/News";
import NewsDetail from "./pages/NewsDetail";
import About from "./pages/About"; // full page about

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
    AOS.refresh();
  }, []);

  const Home = () => (
    <>
      <div id="home" data-aos="fade-up"><Hero /></div>
      <div id="about" data-aos="fade-up"><AboutSection /></div>
      <div id="services" data-aos="fade-up"><Services /></div>
      <div id="offers" data-aos="fade-up"><Offers /></div>
      <div id="team" data-aos="fade-up"><Team /></div>
      <div id="contact" data-aos="fade-up"><Contact /></div>
      <div id="faq" data-aos="fade-up"><FAQ /></div>
      <div id="news" data-aos="fade-up"><News /></div>
    </>
  );

  // Custom wrapper to check route
  const Layout = ({ children }) => {
    const location = useLocation();
    const hideNavbar = location.pathname === "/about"; // hide navbar on /about
    return (
      <>
        {!hideNavbar && <Navbar />}
        {children}
        <Footer />
      </>
    );
  };

  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
