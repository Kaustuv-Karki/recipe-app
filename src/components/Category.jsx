import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <List>
            <SLink to="/cuisine/Italian">
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to="/cuisine/American">
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to="/cuisine/Chinese">
                <GiNoodles />
                <h4>Chinese</h4>
            </SLink>
            <SLink to="cuisine/Japanese">
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
        </List>
    );
};

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    border-radius: 50%;
    align-items: center;
    margin: 1rem;
    width: 6rem;
    height: 6rem;
    background-color: rgb(63, 96, 76);
    cursor: pointer;
    transition: 0.3s ease-in-out;

    svg {
        color: rgb(255, 255, 255);
        font-size: 1.5rem;
        margin-bottom: 0.4rem;
    }

    h4 {
        color: white;
        font-size: 0.8rem;
    }

    &:hover {
        background-color: black;
    }

    &.active {
        h4 {
            text-decoration: underline;
        }
    }
`;

export default Category;
