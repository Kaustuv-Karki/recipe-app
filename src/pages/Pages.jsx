import React from "react";
import Home from "./Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Cusine from "./Cusine";
import Searches from "./Searches";
import Recipes from "./Recipes";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:type" element={<Cusine />} />
                <Route path="/searches/:search" element={<Searches />} />
                <Route path="/recipe/:name" element={<Recipes />} />
            </Routes>
        </AnimatePresence>
    );
};

export default Pages;
