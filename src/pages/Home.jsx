import React from "react";
import Vegetarian from "../components/Vegetarian";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <Popular />
            <Vegetarian />
        </motion.div>
    );
};

export default Home;
