import React from "react";
import Index from "./Index";
// import Search from "./search";
import Details from "./Details";
import Footer from "../component/Footer";
import NavSearch from "./NavSearch";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <div>
      {/* <Navbar /> */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/query/:navlink" element={<NavSearch />}></Route>
          <Route path="/" element={<Index />}></Route>
          <Route path="/details/:imageid" element={<Details />}></Route>
        </Routes>
      </AnimatePresence>
      <Index />
      <Footer />
    </div>
  );
}

export default Pages;
