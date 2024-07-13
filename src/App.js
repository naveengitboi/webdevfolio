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
import AboutProject from "./pages/AboutProject";
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
      <Navbar />
      <Cursor />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="app ">
            <ScrollToTop />
            <Routes>
              <Route
                path="/"
                element={
                  <React.Suspense fallback={<Loader />}>
                    <LazyHome />
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
              <Route path="/project/:proj" element={< AboutProject />} />
              <Route path='/moreworks' element={<MoreWorks />} />
            </Routes>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
