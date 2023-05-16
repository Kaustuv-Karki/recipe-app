import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Search = () => {
    const [input, setInput] = useState("");

    return (
        <FormStyled>
            <input type="text" placeholder="Search" />
        </FormStyled>
    );
};

const FormStyled = styled.form`
    margin: 1rem 2rem;
    position: relative;
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;

    input {
        border: none;
        background: rgb(63, 96, 76);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 70%;
    }
`;

export default Search;
