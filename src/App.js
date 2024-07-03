import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import React from "react";
import "./App.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Cursor from "./cursorTypes/Cursor";
import MoreWorks from "./pages/MoreWorks";
  const LazyHome = React.lazy(() => import("./pages/Home"));
  const LazyInfo = React.lazy(() => import("./pages/InfoPage"));

  function App() {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
      const lenis = new Lenis();

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);

    return (
      <div className="reactcontainer" >
        <Cursor/>

        <svg
          className="texture"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsSvgjs="http://svgjs.dev/svgjs"
        >
        <defs>
          <filter
            id="nnnoise-filter"
            x="-20%"
            y="-20%"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="linearRGB"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.167"
              numOctaves="4"
              seed="15"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              result="turbulence"
            ></feTurbulence>
            <feSpecularLighting
              surfaceScale="13"
              specularConstant="1.5"
              specularExponent="20"
              lighting-color="#949494"
              x="0%"
              y="0%"
              in="turbulence"
              result="specularLighting"
            >
              <feDistantLight azimuth="3" elevation="116"></feDistantLight>
            </feSpecularLighting>
          </filter>
        </defs>
          <rect fill="#0e0e0eff"></rect>
          <rect fill="##0e0e0eff" filter="url(#nnnoise-filter)"></rect>
        </svg>


        <Navbar/>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="app">
              <ScrollToTop />
              <Routes>
                <Route
                  path="/"
                  element={
                    <React.Suspense fallback={<Loader />}>
                      <LazyHome/>
                    </React.Suspense>
                  }
                />
                <Route
                path="/info"
                element={
                  <React.Suspense fallback={<Loader />}>
                    <LazyInfo />
                  </React.Suspense>
                }
              />
              <Route path="/moreworks" element={<MoreWorks/>} />
            </Routes>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
