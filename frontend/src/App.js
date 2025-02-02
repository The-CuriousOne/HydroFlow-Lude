import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useState, useEffect, useCallback } from "react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import Home from "./pages/Home";
import Test from "./pages/Test";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Track from "./pages/Track";
import License from "./pages/License";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Throttle function
  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function (...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  // Memoize the handleScroll function to avoid unnecessary re-renders
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollThreshold =
      5 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Convert 5rem to px

    if (currentScrollY < scrollThreshold) {
      setShowNavbar(true); // Always show the navbar within the first 5rem
    } else if (currentScrollY > lastScrollY) {
      setShowNavbar(false); // Scrolling down
    } else {
      setShowNavbar(true); // Scrolling up
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]); // Only update when lastScrollY changes

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 200); // Throttling scroll events
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [handleScroll]); // Add handleScroll to the dependency array

  return (
    <div className="App">
      <Navbar show={showNavbar} />
      <div className="appDisplay">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/track" element={<Track />} />
          <Route path="/license" element={<License />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
