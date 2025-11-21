import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";


import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";

import { Blogs } from "./pages/blogs";
import { Careers } from "./pages/careers";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  const ScrollToHash = () => {
    const { hash } = useLocation();

    useEffect(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash]);

    return null;
  };

  return (
    <>
      <ScrollToHash />
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header data={landingPageData.Header} />
              <Services data={landingPageData.Services} />
              <About data={landingPageData.About} />
              {/* <Testimonials data={landingPageData.Testimonials} /> */}
              <Contact data={landingPageData.Contact} />
            </>
          }
        />

        <Route path="/blogs" element={<Blogs data={landingPageData.Blogs} />} />

        <Route path="/careers" element={<Careers data={landingPageData.Careers} />} />
      </Routes>
    </>
  );
};

export default App;
