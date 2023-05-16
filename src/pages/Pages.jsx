import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Cusine from "./Cusine";
import Searches from "./Searches";
import Recipes from "./Recipes";

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cusine />} />
            <Route path="/searches/:search" element={<Searches />} />
            <Route path="/recipe/:name" element={<Recipes />} />
        </Routes>
    );
};

export default Pages;
