import React from "react";
import Index from "./Index";
import Details from "./Details";
import Footer from "../component/Footer";
import NavSearch from "./NavSearch";
import ImagePlaceholder from "../component/ImagePlaceholder";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <div>
      {/* <Navbar /> */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="imageraft-site/query/:navlink"
            element={<NavSearch />}
          ></Route>
          <Route path="imageraft-site/" element={<Index />}></Route>
          <Route
            path="imageraft-site/test"
            element={<ImagePlaceholder />}
          ></Route>
          <Route
            path="imageraft-site/details/:imageid"
            element={<Details />}
          ></Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default Pages;
