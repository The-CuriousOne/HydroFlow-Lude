import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Test from "./pages/Test";
import { useState, useEffect, useCallback } from "react";
import Footer from "./components/Footer";

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
    if (currentScrollY > lastScrollY) {
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
