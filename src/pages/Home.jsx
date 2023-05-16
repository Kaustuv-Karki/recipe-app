import React from "react";
import Vegetarian from "../components/Vegetarian";
import Popular from "../components/Popular";
import Category from "../components/Category";

const Home = () => {
    return (
        <div>
            <Popular />
            <Vegetarian />
        </div>
    );
};

export default Home;
