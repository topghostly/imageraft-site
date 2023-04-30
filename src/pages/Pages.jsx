import React from "react";
import { useState } from "react";
import Index from "./Index";
import Navbar from "../component/Navbar";
import Details from "./Details";
import Footer from "../component/Footer";
import TextToImage from "./TextToImage";
import NavSearch from "./NavSearch";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Preloader from "../component/Preloader";

function Pages() {
  const [preloader, setPreloader] = useState(true);
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        {preloader && <Preloader />}
        <Routes location={location} key={location.pathname}>
          <Route
            path="imageraft-site/query/:navlink"
            element={<NavSearch preloaders={setPreloader} />}
          ></Route>
          <Route
            path="imageraft-site/"
            element={<Index preloaders={setPreloader} />}
          ></Route>
          <Route
            path="imageraft-site/imageai"
            element={<TextToImage preloaders={setPreloader} />}
          ></Route>
          <Route
            path="imageraft-site/details/:imageid"
            element={<Details preloaders={setPreloader} />}
          ></Route>
          <Route path="imageraft-site/test" element={<Preloader />}></Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default Pages;
