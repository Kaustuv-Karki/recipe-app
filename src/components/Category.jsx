import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <List>
            <Link to="/cusine/Italian">
                <FaPizzaSlice />
                <h4>Italian</h4>
            </Link>
            <Link to="/cusine/American">
                <FaHamburger />
                <h4>American</h4>
            </Link>
            <Link to="/cusine/Chinese">
                <GiNoodles />
                <h4>Chinese</h4>
            </Link>
            <Link to="cusine/Japanese">
                <GiChopsticks />
                <h4>Japanese</h4>
            </Link>
        </List>
    );
};

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export default Category;
